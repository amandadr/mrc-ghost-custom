import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        {type: 'doc', id: 'intro', label: 'About these docs'},
        {
          type: 'doc',
          id: 'how-to-use-these-docs',
          label: 'How to use these docs',
        },
        {type: 'doc', id: 'reference/roadmap', label: 'Roadmap & Changelog'},
      ],
    },
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        {
          type: 'doc',
          id: 'quick-start/quick-start-developer',
          label: 'Quick start — Developer',
        },
        {
          type: 'doc',
          id: 'quick-start/quick-start-operator',
          label: 'Quick start — Operator',
        },
        {
          type: 'doc',
          id: 'quick-start/quick-start-reader',
          label: 'Quick start — Reader',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer',
      items: [
        {type: 'doc', id: 'architecture/overview', label: 'Architecture overview'},
        {
          type: 'doc',
          id: 'architecture/theme-system',
          label: 'Theme (Ghost custom theme)',
        },
        {
          type: 'doc',
          id: 'architecture/templates-and-partials',
          label: 'Theme anatomy',
        },
        {
          type: 'doc',
          id: 'getting-started/local-development',
          label: 'Local development & build',
        },
        {
          type: 'doc',
          id: 'performance/scripts-and-assets',
          label: 'Asset pipeline & optimisation',
        },
        {
          type: 'category',
          label: 'Templates & helpers',
          items: [
            {type: 'doc', id: 'templates/overview', label: 'Overview'},
            {type: 'doc', id: 'templates/home', label: 'Home'},
            {type: 'doc', id: 'templates/blog-and-index', label: 'Blog and index'},
            {type: 'doc', id: 'templates/post-and-page', label: 'Post and page'},
            {
              type: 'doc',
              id: 'templates/resources-pdfs',
              label: 'Whitepapers + case studies',
            },
            {type: 'doc', id: 'templates/theme-settings', label: 'Theme settings'},
          ],
        },
        {
          type: 'category',
          label: 'Design & components',
          items: [
            {type: 'doc', id: 'design-system/overview', label: 'Overview'},
            {type: 'doc', id: 'design-system/colours', label: 'Colours'},
            {type: 'doc', id: 'design-system/typography', label: 'Typography'},
            {type: 'doc', id: 'design-system/spacing', label: 'Spacing'},
            {type: 'doc', id: 'design-system/composition', label: 'Composition'},
            {
              type: 'doc',
              id: 'design-system/responsiveness',
              label: 'Responsiveness',
            },
            {type: 'doc', id: 'design-system/accessibility', label: 'Accessibility'},
            {
              type: 'doc',
              id: 'design-system/component-library',
              label: 'Component library',
            },
            {
              type: 'doc',
              id: 'design-system/component-api',
              label: 'Component API glossary',
            },
          ],
        },
        {
          type: 'category',
          label: 'DocsGPT / Botty',
          items: [
            {
              type: 'doc',
              id: 'ai-assistant/docsgpt-overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'ai-assistant/design',
              label: 'Design',
            },
            {
              type: 'doc',
              id: 'ai-assistant/docsgpt-implementation-plan',
              label: 'Implementation plan',
            },
            {
              type: 'doc',
              id: 'ai-assistant/docsgpt-architecture-decisions',
              label: 'Architecture decisions',
            },
            {
              type: 'doc',
              id: 'ai-assistant/docsgpt-devops-and-deploy',
              label: 'DevOps and deploy',
            },
            {
              type: 'doc',
              id: 'ai-assistant/docsgpt-examples-and-snippets',
              label: 'Examples & snippets',
            },
            {
              type: 'doc',
              id: 'ai-assistant/docsgpt-open-source-contribution',
              label: 'Open-source contribution',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Operator (Ops & SRE)',
      items: [
        {type: 'doc', id: 'operations/deployment', label: 'Deployments'},
        {
          type: 'doc',
          id: 'getting-started/build-and-validate',
          label: 'Deploy checklist',
        },
        {
          type: 'doc',
          id: 'operations/observability',
          label: 'Observability',
        },
        {
          type: 'doc',
          id: 'ai-assistant/docsgpt-testing-and-operations',
          label: 'DocsGPT runbooks',
        },
        {
          type: 'doc',
          id: 'performance/strategy',
          label: 'Performance strategy',
        },
        {
          type: 'doc',
          id: 'performance/fonts-and-images',
          label: 'Fonts and images',
        },
      ],
    },
    {
      type: 'category',
      label: 'Non-technical / Product',
      items: [
        {type: 'doc', id: 'what-it-does', label: 'What it does'},
        {type: 'doc', id: 'benefits-and-outcomes', label: 'Benefits & outcomes'},
        {
          type: 'doc',
          id: 'privacy-and-data-handling',
          label: 'Privacy & data handling',
        },
        {type: 'doc', id: 'faq', label: 'FAQs'},
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        {
          type: 'doc',
          id: 'contributing/contributor-guide',
          label: 'Contributor guide',
        },
        {type: 'doc', id: 'contributing/style-guide', label: 'Style guide'},
        {
          type: 'doc',
          id: 'contributing/versioning-and-releases',
          label: 'Versioning & releases',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {type: 'doc', id: 'reference/system-map', label: 'System map'},
        {
          type: 'doc',
          id: 'reference/stack-and-dependencies',
          label: 'Stack & dependencies',
        },
        {type: 'doc', id: 'reference/glossary', label: 'Glossary'},
        {type: 'doc', id: 'reference/links', label: 'Notes & links'},
        {type: 'doc', id: 'reference/changelog', label: 'Changelog'},
      ],
    },
  ],
};

export default sidebars;
