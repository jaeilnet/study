type testCaseType = "a" | "b" | "c" | "d";

type T0 = Exclude<testCaseType, "a">;

// type T0 = "b" | "c" | "d"

type T1 = Exclude<testCaseType, "a" | "d">;

// type T1 = "b" | "c"

type T2 = Exclude<string | number | (() => void), Function>;

// type T2 = 'string' | 'number'

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; radius: number }
  | { kind: "triangle"; radius: number }
  | { kind: "circle2"; radius: number }
  | { kind: "circle3"; radius: number };

type T3 = Exclude<Shape, { kind: "circle" }>;

// type T3 =
//   | {
//       kind: "square";
//       radius: number;
//     }
//   | {
//       kind: "triangle";
//       radius: number;
//     }
//   | {
//       kind: "circle2";
//       radius: number;
//     }
//   | {
//       kind: "circle3";
//       radius: number;
//     };

type ExcludeLike<T, U> = T extends U ? never : T;

type ExcludeLikeT0 = ExcludeLike<testCaseType, "a">;
type ExcludeLikeT1 = ExcludeLike<testCaseType, "a" | "b">;
type ExcludeLikeT2 = ExcludeLike<testCaseType, "a" | "c">;
type ExcludeLikeT3 = ExcludeLike<Shape, { kind: "circle" }>;
