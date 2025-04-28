export function modifyConfig(config: Config): Config {
    config.slashCommands?.push({
      name: "commit",
      description: "Write a commit message",
      run: async function* (sdk) {
        // The getDiff function takes a boolean parameter that indicates whether
        // to include unstaged changes in the diff or not.
        const diff = await sdk.ide.getDiff(false); // Pass false to exclude unstaged changes
        for await (const message of sdk.llm.streamComplete(
          `${diff}\n\nWrite a commit message for the above changes. Use no more than 20 tokens to give a brief description in the imperative mood (e.g. 'Add feature' not 'Added feature'):`,
          new AbortController().signal,
          {
            maxTokens: 20,
          },
        )) {
          yield message;
        }
      },
    });
    return config;
  }