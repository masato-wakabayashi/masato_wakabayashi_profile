import { CareerItem, Certification, Skill } from './types';

export const PROFILE = {
  name: "若林 将人",
  englishName: "Masato Wakabayashi",
  title: "Senior Software Engineer / Team Lead",
  summary: "事業会社での社内SEとして現場業務のデジタル化（DX）を推進後、エンジニアへ転身。現在は官公庁向け大規模システムのチームリーダーを務める。技術力と業務理解の双方を兼ね備え、非IT部門とのコミュニケーションやベンダーコントロールに強みを持つ。",
  email: "contact@example.com", // Placeholder
  location: "Tokyo, Japan"
};

export const SKILLS: Skill[] = [
  { name: 'Java', level: 85, category: 'Language' },
  { name: 'Spring Boot', level: 80, category: 'Framework' },
  { name: 'JavaScript/TypeScript', level: 75, category: 'Language' },
  { name: 'Vue.js', level: 70, category: 'Framework' },
  { name: 'SQL (PostgreSQL/SQL Server)', level: 80, category: 'Infrastructure' },
  { name: 'AWS', level: 65, category: 'Infrastructure' },
  { name: 'Kintone', level: 80, category: 'Tools' },
  { name: 'Project Management', level: 85, category: 'Soft' },
  { name: 'Vendor Control', level: 80, category: 'Soft' },
  { name: 'Requirement Definition', level: 85, category: 'Soft' }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "NPMO 認定 プロジェクトマネジメント・アソシエイト", date: "2025年" },
  { name: "ORACLE MASTER Silver SQL 2019", date: "2025年" },
  { name: "Oracle Certified Java Programmer, Gold SE 11", date: "2024年" },
  { name: "Oracle Certified Java Programmer, Silver SE 11", date: "2024年" },
  { name: "基本情報技術者試験", date: "2024年" },
  { name: "AWS Certified Solutions Architect – Associate", date: "2021年" },
];

export const CAREER_HISTORY: CareerItem[] = [
  {
    id: "career-0",
    company: "某東証プライム上場 メーカー",
    period: "2025/11 - 現在",
    role: "社内SE / PL",
    description: "情報システム部門にて、基幹システム統合やクラウド環境構築、Web制作など多岐にわたるプロジェクトをリード。",
    projects: [
      {
        title: "基幹システム統合PJ",
        role: "PL",
        size: "大規模",
        stack: ["要件定義", "PMO"],
        summary: "基幹システム統合に向けた要件定義・ベンダーコントロール（コーディングレス）。",
        achievements: []
      },
      {
        title: "個人情報管理システム導入",
        role: "PL",
        size: "中規模",
        stack: ["要件定義", "Security"],
        summary: "個人情報管理プロセスのシステム化における要件定義（コーディングレス）。",
        achievements: []
      },
      {
        title: "サービス紹介LP制作",
        role: "Developer",
        size: "小規模",
        stack: ["HTML/CSS", "JavaScript"],
        summary: "新規製品・サービスのプロモーション用ランディングページ作成。",
        achievements: []
      },
      {
        title: "AI積算システム クラウド構築",
        role: "Infra Engineer",
        size: "中規模",
        stack: ["AWS", "Terraform", "AI"],
        summary: "AI積算システムの稼働環境となるクラウドインフラの設計・構築。",
        achievements: []
      }
    ]
  },
  {
    id: "career-1",
    company: "某テクノロジーコンサルティング企業",
    period: "2025/04 - 2025/10",
    role: "Senior Engineer / Team Lead",
    description: "テクノロジーコンサルティング事業。官公庁向け大規模システムの刷新および公開ポータルのフロントエンド開発に従事。",
    projects: [
      {
        title: "官公庁向けデータ連携基盤システム開発",
        role: "チームリーダー",
        size: "チーム4名 (全体200名)",
        stack: ["Java", "Spring Boot", "Linux", "PostgreSQL"],
        summary: "SOAPからRESTへの変換、レガシーJavaからSpring Bootへの刷新。",
        achievements: [
          "基本設計からテストまでを一貫して担当",
          "API開発チームのリーダーとしてメンバーのタスク管理・レビューを実施",
          "オフショア開発を含む体制での品質管理"
        ]
      },
      {
        title: "某省庁向け 公開ポータルサイト フロントエンド開発",
        role: "Frontend Engineer",
        size: "チーム4名",
        stack: ["HTML/CSS", "JavaScript", "Vue.js"],
        summary: "省庁が管轄する公開ポータルサイトのフロントエンドにおけるデザイン調整および画面作成。",
        achievements: [
          "Vue.jsを用いたUIコンポーネントの実装とデザイン調整",
          "ユーザビリティ向上のための画面レイアウト改善",
          "既存システムとの整合性を保ちながらのモダン化推進"
        ]
      }
    ]
  },
  {
    id: "career-2",
    company: "某東証スタンダード上場 建材メーカー",
    period: "2018/06 - 2025/01",
    role: "社内SE / 経営企画室 主任",
    description: "情報システム部門にて、基幹システムの刷新や社内業務のDX化をリード。",
    projects: [
      {
        title: "基幹システム再構築PJ (ERP導入)",
        role: "PMO / 導入責任者",
        size: "10名 (全体)",
        stack: ["OBIC7", "Excel VBA"],
        summary: "基幹システム刷新に伴うパッケージ導入、カスタマイズ、全社業務フロー標準化。",
        achievements: [
          "多部門からの50件以上の業務要件を精査・統合",
          "ベンダーとの仕様調整により工程遅延ゼロで本稼働達成",
          "VBAによる帳票作成自動化で作業時間を大幅削減"
        ]
      },
      {
        title: "見積システム導入PJ",
        role: "PL / 導入推進",
        size: "5名",
        stack: ["パッケージ製品", "SQL Server"],
        summary: "営業部門の業務効率化に向けた新見積パッケージシステムの導入。",
        achievements: [
          "現行業務フローの分析と新システムへの適合ギャップ分析",
          "営業担当者向けマニュアル作成・操作説明会の実施"
        ]
      },
      {
        title: "帳票出力システム新規開発",
        role: "PL / 設計・開発",
        size: "4名",
        stack: ["Java", "Spring Boot", "SQL Server", "Bootstrap"],
        summary: "現場の帳票作成負荷を軽減するためのWebアプリ開発。",
        achievements: [
          "帳票作成時間を約90%削減",
          "業務フロー改善によるミス削減",
          "企画・提案から要件定義・実装までフルスタックで担当"
        ]
      },
      {
        title: "製品QRコード照合システム開発",
        role: "PL / 設計・開発",
        size: "4名",
        stack: ["Kintone", "JavaScript", "Java", "API"],
        summary: "モバイル端末を用いた製品管理システムの構築。",
        achievements: [
          "Kintone活用によるUI開発工数の大幅削減",
          "現場での誤配・誤使用ミスの低減"
        ]
      },
      {
        title: "工場生産管理システム運用・保守",
        role: "保守・運用",
        size: "3名",
        stack: ["Access", "VBA", "SQL Server"],
        summary: "工場における生産実績管理システムの安定稼働維持と機能改善。",
        achievements: [
          "現場要望に基づく機能追加・改修の実施",
          "トラブルシューティングと再発防止策の策定"
        ]
      },
      {
        title: "社内システム運用・サポート業務",
        role: "ヘルプデスク / インフラ管理",
        size: "-",
        stack: ["Windows", "Active Directory", "Network"],
        summary: "全社ITインフラの管理および社員からの問い合わせ対応。",
        achievements: [
          "PCキッティング・アカウント管理の効率化",
          "社内ネットワーク機器の更新・管理"
        ]
      }
    ]
  }
];