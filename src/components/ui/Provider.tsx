"use client";
import { Query } from "pg";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode
}

const queryClient = new QueryClient();

const Provider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {React.Children.only(children)}
    </QueryClientProvider>
  );
};

export default Provider;
