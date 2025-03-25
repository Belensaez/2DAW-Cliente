export type InfoMonster = CharacterMonster[]

export interface CharacterMonster {
  id: number
  type: string
  rarity: number
  attack: Attack
  elderseal?: string
  attributes: Attributes
  damageType: string
  name: string
  durability: Durability[]
  slots: Slot[]
  elements: Element[]
  crafting: Crafting
  assets: Assets
}

export interface Attack {
  display: number
  raw: number
}

export interface Attributes {}

export interface Durability {
  red: number
  orange: number
  yellow: number
  green: number
  blue: number
  white: number
  purple: number
}

export interface Slot {
  rank: number
}

export interface Element {
  type: string
  damage: number
  hidden: boolean
}

export interface Crafting {
  craftable: boolean
  previous?: number
  branches: number[]
  craftingMaterials: CraftingMaterial[]
  upgradeMaterials: UpgradeMaterial[]
}

export interface CraftingMaterial {
  quantity: number
  item: Item
}

export interface Item {
  id: number
  rarity: number
  carryLimit: number
  value: number
  name: string
  description: string
}

export interface UpgradeMaterial {
  quantity: number
  item: Item2
}

export interface Item2 {
  id: number
  rarity: number
  carryLimit: number
  value: number
  name: string
  description: string
}

export interface Assets {
  icon: string
  image: string
}
