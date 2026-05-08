import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import Preview02Example from "@/islands/demo/page.tsx";

export default define.page(function Home() {
  return (
    <div class="dark">
      <Head>
        <title>fresh-v2-shadcn-boilerplate</title>
      </Head>
      <Preview02Example />
    </div>
  );
});
