
# Arweave Multipage Website Starter Kit

This starter kit provides a foundation for creating multipage websites with custom hash routing, utilizing a recursive Svelte component, and featuring basic custom Vite configuration for seamless deployment to the Arweave Mainnet.

## Features

- Multipage functionality through custom hash routing (not reliant on any additional packages like tinro or Reach Router)
- A Recursive Svelte Component
- Basic custom Vite configuration for easy deployment to Arweave Mainnet

## Requirements

- Customize the page(s) however you want, just keep the entire build under 100kb. (Run `npm run build` to see build size)
- No $AR token or even an Arweave wallet is required as long as you keep the build under 100kb.

## Usage

1. **Clone the Repository**:

```bash
git clone "repourl"
```

2. **Navigate to the Project Directory**:

```bash
cd Arweave-Custom-Hashrouting
```

3. **Install Dependencies**:

```bash
npm install
```

4. **Customize Your Website**: 
   - Edit the pages as per your requirements.

5. **Build Your Website**:

```bash
npm run build
```

6. **Deploy to Arweave**:

```bash
arkb deploy dist --use-bundler https://node2.bundlr.network --tag-name DEPLOY --tag-value Your-MultiPage-AppName --auto-confirm
```

An Arweave URL will be printed when the deployment is successful. It may take up to 30 seconds for the content to publish to the link, so please be patient.

You're all set! Congrats! 

HMU if you have questions. [@PSkinnerTech](https://x.com/PSkinnerTech)

# Arweave-Custom-HashRouting
