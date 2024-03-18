---
source: claude 3 sonnet
tags: ai, gpt, code-generation
---
You're correct, my previous response was too narrowly focused on .NET specific tools. There are indeed some cross-platform CLI tools and language projection libraries that can be used in a .NET environment to generate classes from Parquet schemas automatically. Let me provide some options:

1. **Parquet Tools CLI**
Parquet Tools is a cross-platform command-line tool that can generate code for various languages, including C#, from Parquet metadata files. You can install it and run commands like `parquet-tools totype file.parquet.metadata` to generate the C# classes.

2. **Apache Avro Parquet CLI**
The Apache Avro project provides a CLI tool `avro-tools` that can read Parquet schemas and generate code, including C# classes. You'd need the `Apache.Avro` NuGet package.

3. **Language Projection Libraries for .NET**

- [ ] ⏳ 2024-03-22 🔼 **Language Ext**  - This library allows defining data types based on a schema at runtime without pre-generated classes using LINQ projections.
- [ ] ⏳ 2024-03-22 🔼 **Siros** - Provides dynamic and typed projection of data sources like Parquet into .NET objects.
- [ ] ⏳ 2024-03-22 🔼 **Misc.Extensions** - A lightweight library with dynamic schema projection capabilities.

With these language projection libraries, you can read the Parquet schema metadata at runtime and project/map the data into .NET objects or anonymous types without needing pre-generated classes.

So in summary, while ParquetDotNet itself doesn't provide schema-to-class generation, you can use cross-platform CLIs like Parquet Tools or Avro Tools, or leverage language projection libraries within your .NET environment to achieve automatic mapping of Parquet data to .NET types based on the schema. Let me know if you need any specific examples for using these tools/libraries.