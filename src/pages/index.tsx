import type { NextPage } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// let foo: number = 123;
let foo = {} as { bar: number };

foo.bar = 1;

function double(x: number): number | undefined {
  if (x > 0) {
    return;
  }
  return x * 2;
}

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
