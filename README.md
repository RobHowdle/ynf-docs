# Your Next Festival Documentation

Documentation for the **Your Next Festival (YNF)** platform.

This repository contains the Docusaurus documentation site covering:

- User guides for festival organisers and staff.
- Developer documentation.
- Deployment and provisioning procedures.
- YN Auth integration.
- Platform architecture and security.
- Troubleshooting and operational procedures.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run start
```

## Production Build

Build the documentation site:

```bash
npm run build
```

The generated static site is written to the `build` directory.

## Documentation Structure

```text
docs/
├── user-guide/
└── developer/
```

`user-guide` contains documentation intended for people using and managing a Festival site.

`developer` contains technical documentation for developing, deploying, maintaining, and troubleshooting the YNF platform.

## Security

Do not commit credentials, API keys, provisioning tokens, passwords, or other secrets to this repository.

Examples in documentation must use placeholders or non-sensitive test data.
