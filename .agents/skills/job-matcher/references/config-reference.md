# Job Matcher Configuration Reference

Valid values for profile fields, search parameters, and location mappings.

## Cities

### Chinese Cities (Boss直聘)

北京, 上海, 广州, 深圳, 杭州, 成都, 南京, 武汉, 西安, 苏州, 长沙, 重庆, 天津, 郑州, 青岛, 大连, 厦门, 珠海

Users can also specify cities not in this list — pass them directly to `--city`.

### International Cities (Google Jobs)

| Display Name | SerpApi Location String |
|---|---|
| San Francisco, CA | San Francisco, California, United States |
| New York, NY | New York, New York, United States |
| Seattle, WA | Seattle, Washington, United States |
| Los Angeles, CA | Los Angeles, California, United States |
| Austin, TX | Austin, Texas, United States |
| Boston, MA | Boston, Massachusetts, United States |
| Chicago, IL | Chicago, Illinois, United States |
| Denver, CO | Denver, Colorado, United States |
| London, UK | London, England, United Kingdom |
| Toronto, Canada | Toronto, Ontario, Canada |
| Singapore | Singapore |
| Berlin, Germany | Berlin, Germany |
| Sydney, Australia | Sydney, New South Wales, Australia |
| Tokyo, Japan | Tokyo, Japan |
| Amsterdam, Netherlands | Amsterdam, Netherlands |
| Remote | United States |

For cities not in this table, construct the full location string manually (e.g., "Portland, Oregon, United States").

## Salary Ranges

### Chinese Market (Boss直聘 `--salary` flag)

3K以下, 3-5K, 5-10K, 10-15K, 15-20K, 20-30K, 30-50K, 50K以上

### International Market

$50K-$80K, $80K-$120K, $120K-$160K, $160K-$200K, $200K-$250K, $250K-$300K, $300K+

Note: Google Jobs does not have a salary filter parameter. Filter by salary during the Quick Filter phase instead.

## Experience Levels

### Chinese Market (Boss直聘 `--experience` flag)

应届, 1年以内, 1-3年, 3-5年, 5-10年, 10年以上

### International Market

Entry Level, 1-3 years, 3-5 years, 5-10 years, 10+ years

## Education Levels

### Chinese Market (Boss直聘 `--degree` flag)

大专, 本科, 硕士, 博士

### International Market

Associate, Bachelor, Master, PhD

## Common Dealbreakers

### Chinese Market

996, 加班严重, 外包, 大小周, 无社保, 频繁出差

### International Market

No remote, Low pay, Excessive overtime, Contract only, No visa sponsorship, Frequent travel

## OpenCLI Command Reference

```bash
# Search jobs
opencli boss search "<keyword>" --city <city> --experience <exp> --salary <salary> --limit <n> -f json

# Get job details
opencli boss detail <security_id> -f json

# Health check
opencli doctor
```

## SerpApi Reference

```bash
# Search Google Jobs
curl "https://serpapi.com/search.json?\
engine=google_jobs&\
q=<url_encoded_query>&\
location=<url_encoded_full_location>&\
api_key=$SERPAPI_API_KEY"
```

Key response fields:
- `jobs_results[].title` — Job title
- `jobs_results[].company_name` — Company name
- `jobs_results[].location` — Location
- `jobs_results[].description` — Full job description
- `jobs_results[].detected_extensions.salary` — Salary if available
- `jobs_results[].detected_extensions.schedule_type` — Full-time/Part-time
- `jobs_results[].detected_extensions.posted_at` — When posted
- `jobs_results[].apply_options[]` — Application links with title and URL
