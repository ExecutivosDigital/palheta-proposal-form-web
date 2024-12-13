"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

const PageLink = ({ id }: { id: string }) => {
  const pages = [
    {
      text: "Panorama",
      value: id,
    },
    {
      text: "Tarefas",
      value: `${id}/task`,
    },
    {
      text: "Documentos",
      value: `${id}/documents`,
    },
    {
      text: "Formulários",
      value: `${id}/forms`,
    },
    {
      text: "Ajustes",
      value: `/${id}/settings`,
    },
  ];
  const locationName = usePathname();
  return pages.map((item) => (
    <Link
      key={item.value}
      href={`/projects/${item.value}`}
      className={cn(
        "text-sm font-semibold text-default-500 capitalize pb-3 border-b border-transparent cursor-pointer",
        {
          "border-primary": locationName === `/projects/${item.value}`,
        }
      )}
    >
      {item.text}
    </Link>
  ));
};

export default PageLink;
