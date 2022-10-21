import { Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import { Construct } from 'constructs';



export class MyStaticFargate extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "MyVpc", {
      maxAzs: 3
    });

    const cluster = new ecs.Cluster(this, "MyCluster", {
      vpc: vpc,
    });

    const service = new ecs_patterns.NetworkLoadBalancedFargateService(this, "MyFargateService", {
      // domainName: '',
      cluster,
      memoryLimitMiB: 1024,
      cpu: 512,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
      },
    });

    const port: ec2.Port = new ec2.Port({ protocol: ec2.Protocol.TCP, fromPort: 80, toPort: 80, stringRepresentation: '' });
    service.service.connections.allowFromAnyIpv4(port);
  }
}

