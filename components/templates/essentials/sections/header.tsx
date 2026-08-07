"use client";

import { useState } from "react";
import { Menu2, Search, ShoppingCart, User, X } from "reicon-react";
import { CATEGORIES } from "@/components/templates/essentials/data";
import { TextureButton } from "@/components/templates/essentials/ui/texture-button";
import FilterBar from "@/components/templates/essentials/sections/filter-bar";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <span className="shrink-0 text-lg font-semibold tracking-tight text-primary">
            Essentials
          </span>

          <form
            role="search"
            className="mx-auto hidden w-full max-w-xl items-center gap-2 rounded-full border border-border bg-muted py-1 pl-4 pr-1.5 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary md:flex"
          >
            <Search size={16} className="shrink-0 text-muted-foreground" />
            <input
              name="search"
              placeholder="Search for shirts, hoodies, sneakers..."
              className="h-4 w-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
            />
            <TextureButton type="submit" size="sm" className="rounded-full">
              Search
            </TextureButton>
          </form>

          <div className="flex items-center gap-1">
            <span
              className="flex items-center gap-2 rounded-full px-3 py-2 text-foreground transition-colors hover:bg-muted"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              <span className="hidden text-sm font-medium sm:inline">Cart</span>
              <span
                className="grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground"
                aria-hidden="true"
              >
                0
              </span>
            </span>

            <span className="hidden items-center gap-2 rounded-full px-3 py-2 text-foreground transition-colors hover:bg-muted md:flex">
              <User size={20} />
              <span className="text-sm font-medium">Sign in</span>
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="rounded-full p-2 text-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu2 size={20} />
            </button>
          </div>
        </div>

        {navLinks.length > 0 && (
          <nav
            aria-label="Categories"
            className="hidden overflow-x-auto border-t border-border lg:block"
          >
            <div className="mx-auto flex h-11 max-w-7xl items-center gap-1 px-4 sm:px-6 lg:px-8">
              <span className="rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap text-primary transition-colors hover:bg-muted">
                All Products
              </span>
              {CATEGORIES.map((category) => (
                <span
                  key={category.name}
                  className="rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </nav>
        )}
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-background transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <span className="text-lg font-semibold tracking-tight text-primary">
            Essentials
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-muted"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-1 overflow-y-auto px-4 py-4">
          {navLinks.map((link) => (
            <span
              key={link.label}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-1 border-t border-border px-4 py-4">
          <div className="my-2 h-px bg-border" />
          <p className="px-3 pb-1 pt-2 text-xs font-medium text-muted-foreground">
            Categories
          </p>
          {CATEGORIES.map((category) => (
            <span
              key={category.name}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <span>{category.name}</span>
              <span className="text-xs font-medium text-muted-foreground">
                {category.count}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-1 border-t border-border px-4 py-4">
          <span className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            <ShoppingCart size={16} />
            Cart
          </span>
          <span className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            <User size={16} />
            Sign in
          </span>
        </div>
      </aside>
    </header>
  );
}