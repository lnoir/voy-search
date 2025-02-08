/* tslint:disable */
/* eslint-disable */
export function index(resource: Resource): string;
export function search(index: string, query: Float32Array, k: number): SearchResult;
export function add(index: string, resource: Resource): string;
export function remove(index: string, resource: Resource): string;
export function clear(index: string): string;
export function size(index: string): number;
export interface SearchResult {
    neighbors: Neighbor[];
}

export interface Neighbor {
    id: string;
    title: string;
    url: string;
}

export interface Resource {
    embeddings: EmbeddedResource[];
}

export interface EmbeddedResource {
    id: string;
    title: string;
    url: string;
    embeddings: number[];
}

export class Voy {
  free(): void;
  constructor(resource?: Resource | null);
  serialize(): string;
  static deserialize(serialized_index: string): Voy;
  index(resource: Resource): void;
  search(query: Float32Array, k: number): SearchResult;
  add(resource: Resource): void;
  remove(resource: Resource): void;
  clear(): void;
  size(): number;
}
