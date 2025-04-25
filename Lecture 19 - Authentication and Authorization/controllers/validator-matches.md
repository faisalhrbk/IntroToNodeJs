# 📝 Regex Components (General Regex Concepts) 📝



## 1. Character Classes
- **\d**: Digits (0-9) → e.g., "123"
- **\w**: Word characters (A-Z, a-z, 0-9, underscore) → e.g., "hello_123"
- **[^abc]**: Negation (characters jo `a`, `b`, `c` nahi hain) → e.g., "xyz"
- **Example**: `/^[A-Za-z0-9\s]+$/` → Allows alphabets, numbers, and spaces.

---

## 2. Quantifiers
- **\***: 0 ya zyada occurrences → e.g., "abc*"
- **?**: 0 ya 1 occurrence → e.g., "colou?r"
- **{n}**: Exactly `n` occurrences → e.g., "\d{3}"
- **{n,m}**: `n` se `m` tak occurrences → e.g., "\w{2,5}"
- **Example**: `/^[A-Za-z\s]{2,50}$/` → Name 2 se 50 characters lamba.

---

## 3. Anchors
- **^**: Start of string → Ensures pattern starts from beginning.
- **$**: End of string → Ensures pattern goes till end.
- **\b**: Word boundary → e.g., "\bword\b" matches "word" but not "sword".
- **Example**: `\bword\b` → Matches "word" alone.

---

## 4. Groups and Alternation
- **(abc)**: Groups characters together → e.g., "(abc)+"
- **|**: OR operator → e.g., `cat|dog` matches "cat" ya "dog".
- **Example**: `/^(Mr|Ms)\s[A-Za-z\s]+$/` → Allows "Mr John Doe" or "Ms Alice".

---

## 5. Escaped Characters
- **\.**: Literal dot → e.g., "example\.com"
- **\\**: Literal backslash → e.g., "\\path"
- **Example**: `/^[A-Za-z\s\.]+$/` → Allows alphabets, spaces, and dots (e.g., "John Doe Jr.").

---

## 6. Modifiers (Regex ke Baad)
- **/pattern/i**: Case-insensitive → e.g., `/^[a-z\s]+$/i` allows uppercase.
- **/pattern/g**: Global → Finds all matches.
- **Example**: `/^[A-Za-z\s]+$/i` → No need to specify `A-Z` and `a-z` separately.

---

*Test your regex on tools like regex101.com!*

| **Component**         | **Description**                              | **Example**                          |
|-----------------------|----------------------------------------------|--------------------------------------|
| `\d`                 | Digits (0-9)                                | `123`                               |
| `\w`                 | Word characters (A-Z, a-z, 0-9, _)          | `hello_123`                         |
| `[^abc]`             | Not a, b, c                                 | `xyz`                               |
| `*`                  | 0 or more occurrences                       | `abc*`                              |
| `?`                  | 0 or 1 occurrence                           | `colou?r`                           |
| `{n}`                | Exactly n occurrences                       | `\d{3}`                             |
| `^`                  | Start of string                             | `^hello`                            |
| `$`                  | End of string                               | `world$`                            |
| `(abc)`              | Group characters                            | `(abc)+`                            |
| `|`                  | OR operator                                 | `cat|dog`                           |
| `\.`                 | Literal dot                                 | `example\.com`                      |
| `/pattern/i`         | Case-insensitive                            | `/[a-z]+$/i`                        |