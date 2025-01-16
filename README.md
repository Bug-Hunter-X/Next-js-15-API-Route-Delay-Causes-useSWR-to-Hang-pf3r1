# Next.js 15 API Route Delay Causes useSWR to Hang

This repository demonstrates a bug where using `setTimeout` within a Next.js 15 API route causes `useSWR` to hang on the initial load.  The problem seems specific to introducing artificial delays in the API response.

## Bug Description

A Next.js API route includes a `setTimeout` function to simulate a delay before sending a JSON response. This simple delay causes `useSWR` to infinitely load without ever displaying the data or an error. 

## How to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Visit `http://localhost:3000` in your browser.
5. Observe that the page gets stuck on a loading state, and never displays the data.

## Workaround

The issue can be avoided by removing the artificial delay from the API route.

## Potential Causes

- Next.js 15's edge runtime behavior might be interacting unexpectedly with `setTimeout` within API routes.
- Possible race condition between the request and the response processing within Next.js's internal mechanisms.

## Additional Information

This bug report serves as documentation and a potential reference for debugging similar issues within Next.js 15 applications using `useSWR` or similar data fetching libraries.