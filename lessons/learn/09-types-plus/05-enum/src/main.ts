enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}

// Equivalent
type LogLevelStrings = keyof typeof LogLevel;

enum LogLevelUpdate {
    ERROR = 1,
    WARN,
    INFO,
    DEBUG,
}

enum LogLevelMultiple {
    ERROR = 1,
    WARN = "WARN",
    INFO = "Test",
    DEBUG = 2,
}