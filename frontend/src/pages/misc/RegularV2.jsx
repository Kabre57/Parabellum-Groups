import React from "react";
import { Head } from "../../componenets";

const RegularV2Page = () => {
  return (
    <>
        <Head title="Regular Page v2" />
        <div className="relative xl:max-w-[1140px]">
            <div className="pb-6 sm:pb-10">
                <h2 className="mb-4 font-normal text-3xl lg:text-4xl leading-tighter tracking-tight text-slate-700 dark:text-white font-heading">Regular Page Title</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">We love to share ideas! Visit our blog if you're looking for great articles or inspiration to get you going.</p>
            </div>

            <div className="2xl:me-4 entry">
                <h3>Fuga eius ipsama dolores asperiores</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius ipsam blanditiis voluptatem mollitia dolores asperiores ipsum rerum repellendus. Ullam et, quam eos blanditiis ipsum tempore minus quis laborum praesentium.</p>
                <p>Popsam blanditiis voluptatem mollitia dolores asperiores ipsum rerum repellendus. Ullam et, quam eos blanditiis ipsum tempore.</p>
                <img src="/images/slides/slide-b.jpg" alt="" />
                <h4>Mollitia dolores asperiores ipsum rerum repellendus</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illoveritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illoveritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                <h5>Perspiciatis unde omnis iste natus error sit voluptatem</h5>
                <p>Mollitia dolores asperiores ipsum rerum repellendus Sed ut accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illoveritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
        </div>
    </>
  );
};
export default RegularV2Page;
