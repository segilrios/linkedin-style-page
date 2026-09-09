# GitHub Pages Deployment Specification

## Purpose

Define reliable publication of the portfolio's validated static build through GitHub Pages.

## Requirements

### Requirement: Build and Deploy Workflow

The system MUST run an automated deployment workflow for approved changes on the repository's publishing branch. The workflow MUST build the portfolio and deploy only successfully built output to GitHub Pages.

#### Scenario: Successful publishing-branch deployment

- GIVEN an approved change is available on the publishing branch
- WHEN the deployment workflow runs and the build succeeds
- THEN the built portfolio output is deployed to GitHub Pages

#### Scenario: Build does not succeed

- GIVEN the deployment workflow runs for a publishing-branch change
- WHEN the portfolio build fails
- THEN the workflow MUST NOT deploy that failed build output

### Requirement: GitHub Pages URL Publication

The system MUST document the repository's GitHub Pages URL in project documentation after GitHub Pages is configured, and the documented URL MUST identify the published portfolio location.

#### Scenario: Pages URL is available

- GIVEN GitHub Pages has a published URL for the repository
- WHEN a visitor reads the project documentation
- THEN the documentation presents that URL as the portfolio location

#### Scenario: Pages URL is unavailable

- GIVEN GitHub Pages has not provided a published URL
- WHEN project documentation is prepared
- THEN it MUST NOT present an unverified URL as published

### Requirement: Deployment Failure Visibility

The system MUST expose build or deployment failures through the workflow's visible status and logs so repository maintainers can identify the failed run and its failure stage.

#### Scenario: Deployment failure is reported

- GIVEN a deployment workflow has failed
- WHEN a maintainer views the workflow result
- THEN the result shows a failure status and links to failure details

#### Scenario: Successful deployment is reported

- GIVEN a deployment workflow completes successfully
- WHEN a maintainer views the workflow result
- THEN the result shows a successful status for that run

### Requirement: Custom Domain Exclusion Without DNS Configuration

The system MUST NOT configure, document, or redirect to a custom domain unless owner-provided DNS configuration has been supplied and validated. A CNAME file alone SHALL NOT be treated as DNS configuration.

#### Scenario: No DNS configuration is provided

- GIVEN no owner-provided, validated DNS configuration exists
- WHEN GitHub Pages deployment is configured
- THEN the portfolio uses only its GitHub Pages URL

#### Scenario: CNAME file is present without DNS validation

- GIVEN a CNAME file is present but DNS configuration is not validated
- WHEN the deployment configuration is reviewed
- THEN the custom domain MUST NOT be enabled or documented as active
