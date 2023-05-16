import { test, expect } from "vitest";

type MapFn<A, B, Obj> = (value: A, key: keyof Obj) => B;
function objectMap<A, B, Obj extends object>(fn: MapFn<A, B, Obj>, obj: Obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      fn(value, key as keyof Obj),
    ])
  );
}

// === JS version ===
// function objectMap(fn, obj) {
//   return Object.fromEntries(
//     Object.entries(obj).map(([key, value]) => [
//       key,
//       fn(value, key),
//     ])
//   );
// }

test("object map", () => {
  // 把這邊換成你的物件
  const test = {
    address: "aa",
    afternoon_inspection: "dd",
    alert: "sdd",
    apply_back_comment: null,
    apply_back_time: "单独",
    audit_comment: "sdd",
    audit_time: "sss",
    back_audit_time: "ff",
    back_comment: "",
    back_time: null,
    build_area: "",
    build_type: null,
    charge_man: "",
    child_insurance: null,
    child_num: "",
  };

  console.log(
    objectMap((value) => value ?? "無資料", test)
    //
  );
});
