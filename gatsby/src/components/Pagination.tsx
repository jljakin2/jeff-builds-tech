import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { media } from "../utils/mediaQueries";

const PaginationStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
  margin: 5rem 0;

  .word {
    display: none;
  }

  & > * {
    background: var(--white);
    cursor: pointer;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    text-decoration: none;
    color: var(--text);

    padding: 0.5rem 1rem;

    ${media.tablet} {
      padding: 1rem 1.5rem;
    }

    &:focus {
      color: var(--text);
    }

    &[aria-current],
    &.current {
      background: var(--primary-500);
      color: var(--white);
    }

    &[disabled] {
      pointer-events: none;
      color: var(--grey-500);
    }
  }
`;

interface IPaginationProps {
  pageSize: number;
  totalCount: number;
  currentPage: number;
  skip: number;
  base: string;
}

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}: IPaginationProps) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <PaginationStyles>
      <Link
        title="Prev Page"
        // @ts-ignore
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}`}>
        ← <span className="word">Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? "current" : ""}
          to={`${base}/${i > 0 ? i + 1 : ""}`}
          key={`page${i}`}>
          {i + 1}
        </Link>
      ))}
      <Link
        title="Next Page"
        // @ts-ignore
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}>
        <span className="word">Next</span> →
      </Link>
    </PaginationStyles>
  );
}
