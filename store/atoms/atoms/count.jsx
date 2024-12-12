import { atom ,selector} from "recoil";

export const countAtom = atom({
  key: "countAtom", // Unique ID
  default: 0,       // Initial state
});

export const evenSelector=selector({
    key:"evenSelector",
    get:(props)=>{
        const count=props.get(countAtom); //-->whenever countAtom changes then runs ,like useMemo()
        return count%2;
    }
}); 