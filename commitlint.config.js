// "build": changes related to building the project, such as changes to build scripts or tools.
// "chore": other changes that don't modify code or affect tests, such as updating dependencies or configuration files.
// "ci": changes to the continuous integration (CI) configuration or scripts.
// "docs": changes to documentation, such as README files or inline code comments.
// "feat": new features or functionality added to the project.
// "fix": bug fixes or corrections to existing code.
// "perf": performance-related improvements.
// "refactor": code changes that don't add new features or fix bugs, but improve the code structure or readability.
// "revert": a commit that undoes a previous commit.
// "style": changes to code style or formatting.
// "test": adding or modifying tests.
// "translation": changes related to translations or localization.
// "security": changes related to security or vulnerability fixes.
// "changeset": a special commit that is used by some tools to manage versioning and release

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "translation",
        "security",
        "changeset",
      ],
    ],
  },
}
