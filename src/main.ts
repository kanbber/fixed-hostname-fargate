import { App } from 'aws-cdk-lib';
import { MyStaticFargate } from './fargate';

const janoschEnv = {
  account: '630372269283',
  region: 'eu-central-1',
};

const app = new App();
new MyStaticFargate(app, 'fixed-hostname-fargate-dev', { env: janoschEnv });

app.synth();
