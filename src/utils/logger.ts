import { LoggerOptions } from "pino";
import dayjs from "dayjs";
import pino from "pino";
import pinoPretty from "pino-pretty";

interface CustomLoggerOptions extends LoggerOptions {}

const log = pino({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
  prettifier: pinoPretty  // Use pino-pretty for pretty-printing
} as CustomLoggerOptions);

export default log;
