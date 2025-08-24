import { Instance } from "mobx-state-tree";
export declare const RootStore: import("mobx-state-tree").IModelType<{
    people: import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            gender: import("mobx-state-tree").ISimpleType<string>;
            birthYear: import("mobx-state-tree").ISimpleType<string>;
            eyeColor: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
    planets: import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            population: import("mobx-state-tree").ISimpleType<string>;
            rotationPeriod: import("mobx-state-tree").ISimpleType<string>;
            diameter: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
    starships: import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            model: import("mobx-state-tree").ISimpleType<string>;
            manufacturer: import("mobx-state-tree").ISimpleType<string>;
            costInCredits: import("mobx-state-tree").ISimpleType<string>;
            length: import("mobx-state-tree").ISimpleType<string>;
            crew: import("mobx-state-tree").ISimpleType<string>;
            passengers: import("mobx-state-tree").ISimpleType<string>;
            cargoCapacity: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
}, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export type RootInstance = Instance<typeof RootStore>;
export declare function createRootStore(): RootInstance;
export declare function StoreProvider({ children, store }: {
    children: React.ReactNode;
    store: RootInstance;
}): import("react/jsx-runtime").JSX.Element;
export declare function useStore(): {
    people: {
        items: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            gender: import("mobx-state-tree").ISimpleType<string>;
            birthYear: import("mobx-state-tree").ISimpleType<string>;
            eyeColor: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            gender: import("mobx-state-tree").ISimpleType<string>;
            birthYear: import("mobx-state-tree").ISimpleType<string>;
            eyeColor: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
        selectedId: string | undefined;
        loading: boolean;
        error: string | undefined;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            gender: import("mobx-state-tree").ISimpleType<string>;
            birthYear: import("mobx-state-tree").ISimpleType<string>;
            eyeColor: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    planets: {
        items: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            population: import("mobx-state-tree").ISimpleType<string>;
            rotationPeriod: import("mobx-state-tree").ISimpleType<string>;
            diameter: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            population: import("mobx-state-tree").ISimpleType<string>;
            rotationPeriod: import("mobx-state-tree").ISimpleType<string>;
            diameter: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
        selectedId: string | undefined;
        loading: boolean;
        error: string | undefined;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            population: import("mobx-state-tree").ISimpleType<string>;
            rotationPeriod: import("mobx-state-tree").ISimpleType<string>;
            diameter: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    starships: {
        items: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            model: import("mobx-state-tree").ISimpleType<string>;
            manufacturer: import("mobx-state-tree").ISimpleType<string>;
            costInCredits: import("mobx-state-tree").ISimpleType<string>;
            length: import("mobx-state-tree").ISimpleType<string>;
            crew: import("mobx-state-tree").ISimpleType<string>;
            passengers: import("mobx-state-tree").ISimpleType<string>;
            cargoCapacity: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            model: import("mobx-state-tree").ISimpleType<string>;
            manufacturer: import("mobx-state-tree").ISimpleType<string>;
            costInCredits: import("mobx-state-tree").ISimpleType<string>;
            length: import("mobx-state-tree").ISimpleType<string>;
            crew: import("mobx-state-tree").ISimpleType<string>;
            passengers: import("mobx-state-tree").ISimpleType<string>;
            cargoCapacity: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
        selectedId: string | undefined;
        loading: boolean;
        error: string | undefined;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            model: import("mobx-state-tree").ISimpleType<string>;
            manufacturer: import("mobx-state-tree").ISimpleType<string>;
            costInCredits: import("mobx-state-tree").ISimpleType<string>;
            length: import("mobx-state-tree").ISimpleType<string>;
            crew: import("mobx-state-tree").ISimpleType<string>;
            passengers: import("mobx-state-tree").ISimpleType<string>;
            cargoCapacity: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
} & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
    people: import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            gender: import("mobx-state-tree").ISimpleType<string>;
            birthYear: import("mobx-state-tree").ISimpleType<string>;
            eyeColor: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
    planets: import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            population: import("mobx-state-tree").ISimpleType<string>;
            rotationPeriod: import("mobx-state-tree").ISimpleType<string>;
            diameter: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
    starships: import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            name: import("mobx-state-tree").ISimpleType<string>;
            model: import("mobx-state-tree").ISimpleType<string>;
            manufacturer: import("mobx-state-tree").ISimpleType<string>;
            costInCredits: import("mobx-state-tree").ISimpleType<string>;
            length: import("mobx-state-tree").ISimpleType<string>;
            crew: import("mobx-state-tree").ISimpleType<string>;
            passengers: import("mobx-state-tree").ISimpleType<string>;
            cargoCapacity: import("mobx-state-tree").ISimpleType<string>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        selectedId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        loading: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        error: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    }, {
        setSelected(id?: string): void;
        load: () => Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
}, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
