import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = 'dist';

copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'));
