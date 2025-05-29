import type { Metadata } from "next";
import { pagesMetadata } from "../metadata";
import CommandsList from "./CommandsList";

export const metadata: Metadata = pagesMetadata.commands;

export default function CommandsPage() {
  return <CommandsList />;
}