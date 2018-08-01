import fs from 'fs';
import { printSchema } from 'graphql/utilities';
import path from 'path';

import schema from '../data/schema';

fs.writeFileSync(
  path.join(__dirname, '../data/schema.graphql'),
  printSchema(schema)
);
