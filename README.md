# Ngx Formly Antd

## Installation

```bash
npm install @ngx-formly/core ngx-formly-antd
```

## Usage

Import all the component modules into your app.module.ts file and feature modules.

```typescript
import { FormlyModule } from '@ngx-formly/core';
import { NgxFormlyAntdModule } from 'ngx-formly-antd';

@NgModule({
  imports: [
    FormlyModule.forRoot(),
    NgxFormlyAntdModule,
  ],
})
export class AppModule {}
```

Import the component modules you want to use into your app.module.ts file and feature modules.

```typescript
import { FormlyModule } from '@ngx-formly/core';
import { NgxFormlyAntdInputModule } from 'ngx-formly-antd/input';

@NgModule({
  imports: [
    FormlyModule.forRoot(),
    NgxFormlyAntdInputModule,
  ],
})
export class AppModule {}
```
