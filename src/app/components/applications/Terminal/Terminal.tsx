import React, { useEffect, useRef, useState } from "react";

type History = {
  command: string;
  output: string;
};

const Prompt = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="font-semibold text-green-400"> ➜ </span>
      <span className="font-semibold text-cyan-400"> ~ </span>
    </div>
  );
};

const runCommand = (command: string) => {
  switch (command) {
    case "help":
      return "Available commands: help, about, contact, projects";
    default:
      return `Command not found: ${command}`;
  }
};

export const Terminal = () => {
  const [history, setHistory] = useState<History[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const output = runCommand(e.currentTarget.value);
      setHistory([...history, { command: e.currentTarget.value, output }]);
      e.currentTarget.value = "";
    }
  };

  return (
    <div
      className="min-h-[480px] min-w-[360px] bg-neutral-800 text-neutral-300 p-2 font-mono tracking-wide"
      onClick={focusInput}
    >
      {history.map((line, index) => (
        <React.Fragment key={index}>
          <div className="flex gap-2">
            <Prompt />
            <p>{line.command}</p>
          </div>
          {line.output ? <div>{line.output}</div> : null}
        </React.Fragment>
      ))}
      <div className="flex gap-2">
        <Prompt />
        <input
          ref={inputRef}
          type="text"
          className="bg-transparent text-neutral-300 outline-0 flex-1"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
