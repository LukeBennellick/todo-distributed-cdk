import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as TodoAppProject from '../lib/todo-app-stack';

test('SQS Queue Created', () => {
  const app = new cdk.App();
  const stack = new TodoAppProject.TodoAppStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::Bucket', {
    BucketName: 'todo-backups'
  });
});
