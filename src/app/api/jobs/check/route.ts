import { NextResponse } from 'next/server';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

interface CheckResult {
  opencli: boolean;
  bridge: boolean;
  boss: boolean;
  message?: string;
}

export async function GET(): Promise<NextResponse<CheckResult>> {
  const result: CheckResult = { opencli: false, bridge: false, boss: false };

  try {
    await execFileAsync('opencli', ['--version'], { timeout: 5000 });
    result.opencli = true;
  } catch {
    result.message = 'OpenCLI is not installed. Run: npm install -g @jackwener/opencli';
    return NextResponse.json(result);
  }

  try {
    const { stdout } = await execFileAsync('opencli', ['doctor'], {
      timeout: 15000,
      env: { ...process.env },
    });

    const output = stdout.toLowerCase();
    result.bridge = output.includes('browser bridge') && !output.includes('fail');
    result.boss = !output.includes('cookie') || !output.includes('expired');

    if (!output.includes('fail') && !output.includes('error')) {
      result.bridge = true;
      result.boss = true;
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    result.message = `OpenCLI doctor failed: ${msg}`;
  }

  return NextResponse.json(result);
}
