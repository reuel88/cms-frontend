"use client";

import SectionHeader from "@/components/section-header";
import { Disclosure } from "@headlessui/react";
import { ExternalLink, Minus, Plus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

interface PDSPageProps {}

export default function PDSPage({}: PDSPageProps) {
  return (
    <div>
      <SectionHeader
        title="Product Disclosure Statement"
        subTitle="Raiz Invest Australia Fund"
        level={1}
      />

      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        <div className="pt-6">
          <dt>
            <Link
              href={"#"}
              className="flex w-full items-start justify-between text-left text-gray-900"
            >
              <span className="text-base font-semibold leading-7">
                Product Disclosure Statement
              </span>
              <span className="ml-6 flex h-7 items-center">
                <ExternalLink className="h-6 w-6" aria-hidden="true" />
              </span>
            </Link>
          </dt>
          <dd className="hidden ">Product Disclosure Statement</dd>
        </div>
        <div className="pt-6">
          <dt>
            <Link
              href={"#"}
              className="flex w-full items-start justify-between text-left text-gray-900"
            >
              <span className="text-base font-semibold leading-7">
                Additional Information Document
              </span>
              <span className="ml-6 flex h-7 items-center">
                <ExternalLink className="h-6 w-6" aria-hidden="true" />
              </span>
            </Link>
          </dt>
          <dd className="hidden">Additional Information Document</dd>
        </div>

        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <Minus className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Plus className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
