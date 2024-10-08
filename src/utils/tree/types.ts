export type TreeKey = string | number

export type ChildrenKey = TreeKey

export type Tree<T extends ChildrenKey = 'children'> = {
  [key in T]?: Tree<T>[];
} & {
  [key in TreeKey]: any;
}

export type Strategy = 'pre' | 'post' | 'breadth'

export interface BaseOptions {
  childrenKey?: ChildrenKey
  strategy?: Strategy
  getChildrenKey?: (
    tree: Tree,
    meta: BaseCallbackMeta
  ) => ChildrenKey | undefined
}

export interface BaseInnerOptions<T extends ChildrenKey = 'children'> {
  childrenKey: ChildrenKey
  parents: Tree<T>[]
  depth: number
  getChildrenKey?: (
    tree: Tree,
    meta: BaseCallbackMeta
  ) => ChildrenKey | undefined
}

export interface BaseCallbackMeta<T extends ChildrenKey = 'children'> {
  depth: number
  parents?: Tree<T>[]
}
