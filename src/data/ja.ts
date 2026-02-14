import type { SiteConfig, Experience, Contact, Footer, NavItem } from './types';

export const siteConfig: SiteConfig = {
  name: 'HagaSpa',
  initials: 'Yuto Haga',
  title: 'Platform / Data / Fullstack',
  description:
    'インフラ領域を得意とし、GCP / AWS 上の Platform Engineering や Data Engineering を専門としています。開発はフロントエンドからインフラまで全領域を担当できます。開発効率化や全社展開など、組織を横断して世の中や会社にインパクトを残す事が好きです。',
  lang: 'ja',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const about: string[] = [
  '2015年から Web に関する開発と運用に従事。現在は OLTA 株式会社の CTO 室で Platform Engineer / Data Engineer として活動中。',
  '開発者体験の向上、パフォーマンス最適化、サービスの安定性向上、効率化に情熱を注いでいる。',
  'アジャイルによるチーム開発のプロジェクトリード、DevRel としてイベントの企画実施・採用活動のリード、SaaS の全社導入推進などの非技術領域の経験も保有。',
  '趣味は Street Fighter 6 を競技として続けている。',
];

export const experiences: Experience[] = [
  {
    period: '2025.08 - 現在',
    title: 'CTO室 Platform Engineer / Data Engineer',
    company: 'OLTA 株式会社',
    url: 'https://corp.olta.co.jp/',
    description:
      'Platform Engineer として GCP 上のインフラ改善と監視を担当し、パフォーマンス改善を実施。開発生産性の可視化や、AIツールの全社導入などの組織改善も担当。Data Engineer として Looker の整備や管理、ダッシュボードの最適化・新規構築を担当。',
    technologies: ['GCP', 'BigQuery', 'GKE', 'Looker', 'Terraform', 'dbt', 'Django', 'PostgreSQL'],
  },
  {
    period: '2023.06 - 2025.08',
    title: 'Platform Engineer / DevRel',
    company: '株式会社 ダイニー',
    url: 'https://www.dinii.jp/',
    description:
      'GCP 上のインフラ基盤の運用・改善を担当。Terraform で GCP リソースを全て IaC 化。秒間 5000 リクエスト超のサービス安定化のためキャパシティプランニングを実施。DevRel として TSKaigi 出展や技術イベント企画を主導し、採用活動にも貢献。',
    technologies: ['GCP', 'Cloud Run', 'AlloyDB', 'Terraform', 'Cloud Monitoring', 'TypeScript', 'React Native'],
  },
  {
    period: '2021.01 - 2023.05',
    title: 'Lead Engineer',
    company: '株式会社 OpenFashion',
    url: 'https://www.omnisinc.co/',
    description:
      'ワールドグループ「Original Stitch」の生産管理システムを構築。リードエンジニアとしてスクラム開発を導入し、JIRA によるスプリント管理やロードマップ策定を実施。週次リリース体制を構築。',
    technologies: ['Golang', 'MySQL', 'React', 'GCP', 'Terraform', 'GitHub Actions'],
  },
  {
    period: '2018.09 - 2020.12',
    title: 'Data Engineer',
    company: 'au コマース＆ライフ株式会社',
    url: 'https://www.au-cl.co.jp/',
    description:
      'モール型 EC 事業の DMP 構築・運用を担当。AWS・GCP をまたぐマルチクラウド構成を採用し、全インフラを Terraform で管理。データドリブンな意思決定の文化醸成に寄与。',
    technologies: ['Python', 'Golang', 'AWS', 'GCP', 'Terraform', 'BigQuery', 'Tableau'],
  },
  {
    period: '2015.04 - 2018.09',
    title: 'Software Engineer',
    company: '株式会社 アウトソーシングテクノロジー',
    url: 'https://www.ostechnology.co.jp/',
    description:
      '新卒入社。開発を中心に設計からテストまで携わり、バックエンドを中心に複数案件を担当。受託案件を通じて多様な技術のキャッチアップ力を培う。',
    technologies: ['C#', 'PHP', 'Java', 'Node.js', 'AWS'],
  },
];

export const contractWork: Experience[] = [
  {
    period: '2025.08 - 現在',
    title: '技術顧問',
    company: 'seirin and company 合同会社',
    url: 'https://seirin-company.com/',
    description: '開発組織全体に対するコンサル業務。AI による開発フローのナレッジシェア。',
    technologies: ['AI', 'Claude Code', 'Cursor'],
  },
  {
    period: '2025.07 - 現在',
    title: 'SRE',
    company: '株式会社 TENHO',
    url: 'https://tenho7.jp/',
    description: 'データ基盤構築 PJ に SRE として参画。AWS Aurora から BigQuery へのデータ転送基盤を構築。',
    technologies: ['AWS', 'BigQuery', 'TROCCO'],
  },
  {
    period: '2021.12 - 2025.08',
    title: 'Data Engineer',
    company: 'OLTA 株式会社',
    url: 'https://corp.olta.co.jp/',
    description:
      '審査情報を DataLake へ取り込むプログラムを作成。Cloud Run を採用し、docker-compose を用いた構成で組織にコンテナ周りのナレッジを共有。CI/CD パイプラインの設計・実装も担当。',
    technologies: ['Golang', 'GCP', 'Terraform', 'Cloud Build', 'Python', 'Django'],
  },
  {
    period: '2022.11 - 2023.05',
    title: 'Platform Engineer',
    company: '株式会社 ダイニー',
    url: 'https://www.dinii.jp/',
    description:
      'インフラ構築を目的とした採用だったが、フルスタックでタスクを着手。React Native を用いたモバイル開発にも携わる。',
    technologies: ['TypeScript', 'Terraform', 'React Native'],
  },
];

export const contact: Contact = {
  message: 'お仕事のご相談やカジュアルな情報交換など、お気軽にご連絡ください。',
};

export const footer: Footer = {
  text: '© 2026 HagaSpa. Built with Astro & TypeScript.',
};
