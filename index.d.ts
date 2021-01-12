import Vue from "vue";

/** Cmappax component common definition */
declare class CmappaxComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void;
}

/** Component size definition for CmappaxEditorGrid */
declare type CmappaxComponentSize = "large" | "medium" | "small" | "mini";

/** IPentoolOptions interface - 钢笔工具配置 */
declare interface IPentoolOptions {
  lineWidth: number; //钢笔工具线宽
  controlStyle: {
    size?: number; //钢笔控制点大小
    fillColor?: number; //钢笔控制点填充色
    lineColor?: number; //钢笔控制点线条颜色
  };
  curveStyle: {
    fillColor?: number; //钢笔曲线填充色
    lineColor?: number; //钢笔曲线线条色
  };
}

/** IOptions interface */
declare interface IOptions {
  /** PreView page url - 预览页链接 */
  preViewUrl: string;

  /** Path grid Size - 网格大小 */
  gridSize: CmappaxComponentSize;

  /** The outermost canvas background color - 最外层canvas背景色 */
  backgroundColor: number;

  /** Stage background color - 舞台背景色 */
  stageColor: number;

  /** Stage border background color - 舞台边框颜色 */
  stageBorderColor: number;

  /** Point element radius - 点元素半径 */
  pointRad: number;

  /** Initial stage zoom - 初始缩放 */
  initStageScale: number;

  /** Edit point and zoom box proportional zoom ratio - 编辑点以及缩放框等比缩放比例 */
  editNodeScale: number;

  /** Menu bar visible setting - 菜单栏显示配置（文件栏、操作栏、设置栏、视图栏、管理栏、库、帮助栏） */
  menuList: Record<
    "FILE" | "OPER" | "SET" | "VIEW" | "MANAGE" | "LIBRARY" | "HELP",
    boolean
  >;

  /** History record save interval(Less than or equal to 0 does not take effect) - 历史记录保存间隔时间（小于或等于0不生效） */
  saveGapTime: number;

  /** Polygon attribute configuration - 区块属性配置 */
  polygonOptions: Partial<
    Record<
      "fillColor" | "lockColor" | "activeColor" | "editPointActiveColor",
      number
    >
  >;

  /** curve attribute configuration - 弧形属性配置 */
  curveOptions: Partial<
    Record<"curveWidth" | "curveColor" | "controlSize" | "controlColor", number>
  >;

  /** path attribute configuration - 路径属性配置 */
  pathOptions: Partial<
    Record<
      | "nodeColor"
      | "pathWidth"
      | "pathColor"
      | "pathBorderColor"
      | "selectColor"
      | "selPathColor"
      | "disabledPath"
      | "noGetOutPath"
      | "noAccessPath",
      number
    >
  >;

  /** font attribute configuration - 文字属性配置 */
  fontOptions: Partial<Record<"fontSize" | "fontColor", number>>;

  /** outline attribute configuration - outline属性配置 */
  outlineOptions: Partial<Record<"outlineWidth" | "outlineColor", number>>;

  /** pentool attribute configuration - 钢笔工具属性配置 */
  pentoolOptions: Partial<IPentoolOptions>;

  /** pathGrid attribute configuration - 路径网格属性配置 */
  gridOptions: Partial<Record<"gridActiveColor" | "gridLimitColor", number>>;
}

/** CmappaxEditor Component */
export declare class CmappaxEditor extends CmappaxComponent {
  /** projectID - 项目ID */
  pid: string | number;

  /** interface - 接口 */
  interface: string;

  /** user info - 用户token */
  user: Record<"userId" | "name", string>;

  /** buildingID - 建筑ID */
  building?: string | number;

  /** initFloorID - 初始显示楼层ID */
  initFloor?: string | number;

  /** options params - 配置参数 */
  options?: Partial<IOptions>;

  /**
   * Cmappax editor initialization hook
   */
  initCompleted(): void;

  /**
   * Cmappax editor close hook
   */
  close(): void;

  /**
   * import cmp complete hook
   */
  cmpImportComplete(): void;
}
