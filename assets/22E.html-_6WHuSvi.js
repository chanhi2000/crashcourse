import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,a as s,t as d,b as a,n as e,g as p,d as n,e as i,r as l,o as m}from"./app-U_bew1in.js";const k={},g={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},h=s("nav",{class:"table-of-contents"},[s("ul")],-1),q=s("hr",null,null,-1),y=i(`<p>CloudFormation 템플릿으로 CloudFormation 스택을 생성해보겠습니다. 템플릿은 앞에서 설명한 기본 템플릿을 조합하여 EC2 인스턴스를 생성하고, 22, 80번 포트를 여는 Security Group을 설정하고, 아파치 웹 서버를 설치, 실행하는 템플릿을 사용하겠습니다.</p><p>메모장이나 기타 텍스트 편집기를 열고 아래와 같이 템플릿을 작성한 뒤 httpd.template으로 저장합니다.</p><blockquote><p>EC2 인스턴스 생성, 22, 80번 포트를 여는 Security Group 설정, 아파치 웹 서버 설치, 실행 템플릿(<code>installhttpdsecuritygroup.template</code>)</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;Description&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Create an EC2 instance running the Amazon Linux 64 bit AMI.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;Parameters&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;KeyPair&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;Description&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;The EC2 Key Pair to allow SSH access to the instance&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;String&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Default&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;awskeypair&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;Resources&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;Ec2Instance&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;Type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;AWS::EC2::Instance&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;KeyName&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;Ref&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;KeyPair&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ImageId&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ami-c9562fc8&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;SecurityGroups&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token property">&quot;Ref&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;InstanceSecurityGroup&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;InstanceType&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;t1.micro&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;UserData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;Fn::Base64&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;Fn::Join&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token punctuation">[</span> <span class="token string">&quot;#!/bin/bash\\n&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string">&quot;/opt/aws/bin/cfn-init --region &quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  <span class="token property">&quot;Ref&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AWS::Region&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string">&quot; -s &quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">&quot;Ref&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AWS::StackName&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token string">&quot; -r Ec2Instance\\n&quot;</span> <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Metadata&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;AWS::CloudFormation::Init&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;config&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;packages&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;yum&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;httpd&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;services&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;sysvinit&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;httpd&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">&quot;enabled&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">&quot;ensureRunning&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;true&quot;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;InstanceSecurityGroup&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;Type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;AWS::EC2::SecurityGroup&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;GroupDescription&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Allow HTTP and SSH access&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;SecurityGroupIngress&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;IpProtocol&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;FromPort&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;ToPort&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;CidrIp&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0.0.0.0/0&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;IpProtocol&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;FromPort&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;80&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;ToPort&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;80&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;CidrIp&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0.0.0.0/0&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;Outputs&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;InstanceId&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;Description&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;The InstanceId of the newly created EC2 instance&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Value&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;Ref&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Ec2Instance&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;AWSTemplateFormatVersion&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2010-09-09&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/4_.png",alt:'AWS 콘솔로 접속한 뒤 메인 화면에서 Deployment& Management의 <FontIcon icon="iconfont icon-select"/>를 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),_=s("code",null,"[CloudFormation]",-1),C=s("p",null,"오른쪽 위에서 CloudFormation의 리전을 변경할 수 있습니다. 템플릿으로 CloudFormation 스택을 생성하면 여기서 선택한 리전에 AWS 리소스가 생성됩니다.",-1),f=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/5_.png",alt:"Tokyo 리전을 사용하겠습니다.",tabindex:"0",loading:"lazy"}),s("figcaption",null,"Tokyo 리전을 사용하겠습니다.")],-1),S=s("p",null,"생성한 CloudFormation 스택이 하나도 없을 때 페이지가 표시됩니다.",-1),A=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/6_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),F=s("code",null,"[Create New Stack]",-1),T=i('<p>CloudFormation 템플릿으로 CloudFormation 스택을 생성합니다.</p><ul><li><strong>Name</strong>: CloudFormation 스택의 이름입니다. httpd를 입력합니다.</li><li><strong>Source</strong>: 사용할 CloudFormation 템플릿입니다. Upload a template to Amazon S3을 선택하고 파일 선택 버튼을 클릭합니다. <ul><li><strong>Select a sample template</strong>: AWS에서 제공하는 예제 템플릿입니다.</li><li><strong>Upload a template to Amazon S3</strong>: 현재 컴퓨터에 있는 템플릿 파일을 S3에 올린 후 스택을 생성합니다.</li><li><strong>Specify an Amazon S3 Template URL</strong>: 템플릿 파일을 미리 S3 버킷에 올렸다면 S3 버킷에 저장된 템플릿 파일의 경로입니다.</li></ul></li></ul><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/7_.png" alt="CloudFormation 스택 생성" tabindex="0" loading="lazy"><figcaption>CloudFormation 스택 생성</figcaption></figure>',3),W=s("code",null,"httpd.template",-1),z=s("code",null,"[열기]",-1),E=s("code",null,"[Next]",-1),O=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/8_.png",alt:"CloudFormation 템플릿 파일 선택",tabindex:"0",loading:"lazy"}),s("figcaption",null,"CloudFormation 템플릿 파일 선택")],-1),I=s("p",null,[n("EC2 인스턴스에 사용할 키 쌍을 설정합니다. 우리가 만든 템플릿에는 "),s("code",null,"awskeypair"),n("라는 키를 기본값으로 설정해놓았습니다. 다른 키 쌍을 사용하고 싶으면 KeyPair 부분에 키 쌍 이름을 입력하면 됩니다.")],-1),w=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/9_.png",alt:'이제 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),P=s("code",null,"[Next]",-1),x=i("<p>CloudFormation 스택을 생성할 때 사용할 옵션입니다.</p><ul><li><strong>Tags</strong>: CloudFormation 스택의 태그입니다. 기본값 그대로 비워둡니다.</li><li><strong>Advanced</strong>: 추가 옵션입니다. 이번에는 따로 설정하지 않고, 각 항목 설명만 하겠습니다. <ul><li><strong>Notification options</strong>: CloudFormation 스택 이벤트가 발생하면 SNS로 알림을 보냅니다.</li><li><strong>Timeout</strong>: CloudFormation 스택 생성을 시작하고 여기에 설정한 시간(분) 이상 지나면 스택 생성에 실패한 것으로 보고, 모든 AWS 리소스와 설정을 되돌립니다. 기본적으로 Timeout 값이 설정되어 있지 않으므로 스택 생성이 성공할 때까지 기다립니다.</li><li><strong>Rollback on failure</strong>: CloudFormation 스택을 생성하다가 중간에 실패하면 AWS 리소스와 설정을 되돌립니다.</li><li><strong>Stack policy</strong>: CloudFormation 스택 업데이트 정책입니다. 실수로 생성된 스택의 설정을 변경하지 않도록 할 수 있습니다. 자세한 내용은 다음 링크를 참조하기 바랍니다.</li></ul></li></ul>",2),R=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/10_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),N=s("code",null,"[Next]",-1),D=s("p",null,"지금까지 설정한 내용에 이상이 없는지 확인합니다.",-1),G=s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/11_.png",alt:'이상이 없으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),K=s("code",null,"[Create]",-1),V=s("p",null,[n("CloudFormation 스택 목록에 CloudFormation 스택("),s("code",null,"httpd"),n(")이 생성되었습니다.")],-1),M=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/12_.png",alt:"Status를 보면 로 나오며 AWS 리소스를 생성하고 설정하고 있습니다. 완전히 생성되는 시간은 AWS 리소스의 종류와 개수에 따라 달라집니다.",tabindex:"0",loading:"lazy"}),s("figcaption",null,[n("Status를 보면 "),s("code",null,"CREATE_IN_PROGRESS"),n("로 나오며 AWS 리소스를 생성하고 설정하고 있습니다. 완전히 생성되는 시간은 AWS 리소스의 종류와 개수에 따라 달라집니다.")])],-1),U=s("p",null,"CloudFormation 스택 생성이 완료된 뒤 Output 탭을 클릭하면 생성된 EC2 인스턴스의 ID가 표시됩니다.",-1),Z=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/13_.png",alt:"템플릿에서 Output 부분에 설정한 내용이 이곳에 표시됩니다.",tabindex:"0",loading:"lazy"}),s("figcaption",null,"템플릿에서 Output 부분에 설정한 내용이 이곳에 표시됩니다.")],-1),j=s("code",null,"[INSTANCES]",-1),B=s("code",null,"[Instances]",-1),H=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/14_.png",alt:"그리고 아래 세부 내용을 보면 Security groups에 템플릿에서 정의한 InstanceSecurityGroup이 설정되었습니다.",tabindex:"0",loading:"lazy"}),s("figcaption",null,"그리고 아래 세부 내용을 보면 Security groups에 템플릿에서 정의한 InstanceSecurityGroup이 설정되었습니다.")],-1),J=s("p",null,"웹 브라우저를 실행하고 EC2 인스턴스의 Public IP에 접속합니다.",-1),L=s("figure",null,[s("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/15.png",alt:"아파치 웹 서버(httpd)의 기본 웹 페이지 내용이 표시됩니다.",tabindex:"0",loading:"lazy"}),s("figcaption",null,"아파치 웹 서버(httpd)의 기본 웹 페이지 내용이 표시됩니다.")],-1),$=s("p",null,"이처럼 CloudFormation 템플릿으로 AWS 리소스를 조합한 CloudFormation 스택을 생성할 수 있습니다. CloudFormation 스택을 삭제하면 지금까지 생성된 AWS 리소스는 모두 삭제됩니다. CloudFormation 스택에 포함된 EC2 인스턴스 등의 유형을 변경하거나 AWS 리소스의 설정을 변경하고 싶으면 스택 업데이트 기능을 사용하면 됩니다. 템플릿의 내용을 수정한 뒤 Update Stack 버튼을 클릭하고 해당 템플릿을 선택하면 됩니다. 설정 화면은 스택 생성과 동일합니다. 예를 들면 CloudFormation 스택으로 EC2 인스턴스를 100개 만든 뒤 EC2 인스턴스 유형을 변경하면, 새 EC2 인스턴스 100개가 모두 생성되고 나서 기존 EC2 인스턴스 100개가 동시에 삭제됩니다.",-1),Q=s("p",null,"스택 업데이트 기능은 많은 AWS 리소스의 설정을 일괄적으로 변경할 때 유용합니다. 설정 한두 개를 변경할 때에는 AWS 콘솔의 해당 AWS 리소스 페이지에서 직접 설정을 변경해도 됩니다.",-1),X=s("hr",null,null,-1);function Y(c,ss){const o=l("VPCard"),t=l("FontIcon");return m(),u("div",null,[s("h1",g,[s("a",v,[s("span",null,d(c.$frontmatter.title)+" 관련",1)])]),a(o,e(p({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),h,q,a(o,e(p({title:"22장 - 5. CloudFormation 템플릿으로 CloudFormation 스택 생성하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter22/05",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),y,s("figure",null,[b,s("figcaption",null,[n("AWS 콘솔로 접속한 뒤 메인 화면에서 Deployment& Management의 "),a(t,{icon:"iconfont icon-select"}),_,n("를 클릭합니다.")])]),C,f,S,s("figure",null,[A,s("figcaption",null,[a(t,{icon:"iconfont icon-select"}),F,n(" 버튼을 클릭합니다.")])]),T,s("p",null,[n("방금 저장한 "),a(t,{icon:"fas fa-file-lines"}),W,n(" 파일을 선택하고, "),a(t,{icon:"iconfont icon-select"}),z,n(" 버튼을 클릭합니다. 파일을 선택을 했으면 아래쪽 "),a(t,{icon:"iconfont icon-select"}),E,n(" 버튼을 클릭합니다 (나중에 S3 버킷 목록을 보면 템플릿 파일이 저장된 S3 버킷이 생성되어 있습니다).")]),O,I,s("figure",null,[w,s("figcaption",null,[n("이제 "),a(t,{icon:"iconfont icon-select"}),P,n(" 버튼을 클릭합니다.")])]),x,a(o,e(p({title:"Prevent updates to stack resources - AWS CloudFormation",desc:"Prevent stack resources from being unintentionally updated or deleted during a stack update by using AWS CloudFormation stack policies.",link:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",logo:"https://docs.aws.amazon.com/assets/images/favicon.ico",background:"rgba(247,155,38,0.2)"})),null,16),s("figure",null,[R,s("figcaption",null,[a(t,{icon:"iconfont icon-select"}),N,n(" 버튼을 클릭합니다.")])]),D,s("figure",null,[G,s("figcaption",null,[n("이상이 없으면 "),a(t,{icon:"iconfont icon-select"}),K,n(" 버튼을 클릭합니다.")])]),V,M,U,Z,s("p",null,[n("EC2 인스턴스 목록("),a(t,{icon:"iconfont icon-select"}),j,n(" → "),B,n(")에 CloudFormation이 생성한 EC2 인스턴스가 추가되었습니다. 위 CloudFormation 스택 Outputs에 나온 인스턴스 ID와 같습니다.")]),H,J,L,$,Q,X])}const ts=r(k,[["render",Y],["__file","22E.html.vue"]]),os=JSON.parse('{"path":"/aws/art-of-aws/22E.html","title":"22E. CloudFormation 템플릿으로 CloudFormation 스택 생성하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"22E. CloudFormation 템플릿으로 CloudFormation 스택 생성하기","description":"아마존 웹 서비스를 다루는 기술 > 22E. CloudFormation 템플릿으로 CloudFormation 스택 생성하기","catego5y":["5WS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 22E. CloudFormation 템플릿으로 CloudFormation 스택 생성하기"},{"property":"og:description","content":"22E. CloudFormation 템플릿으로 CloudFormation 스택 생5하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/52D.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/22E.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"22E. CloudFormation 템플릿으로 CloudFormation 스택 생성하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 22E. CloudFormation 템플릿으로 CloudFormation 스택 생성하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/4_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/4_.png"}],["meta",{"name":"twitter:image:alt","content":"22E. CloudFormation 템플릿으로 CloudFormation 스택 생성하기"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:published_time","content":"2014-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"22E. CloudFormation 템플릿으로 CloudFormation 스택 생성하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/4_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/5_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/6_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/7_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/8_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/9_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/10_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/11_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/12_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/13_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/14_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/15.png\\"],\\"datePublished\\":\\"2014-09-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"next":"/aws/art-of-aws/23.md","date":"2014-09-30T00:00:00.000Z","isOriginal":false,"cover":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter22/4_.png"},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":5}]},"readingTime":{"minutes":1.82,"words":546},"filePathRelative":"aws/art-of-aws/22E.md","localizedDate":"2014년 9월 30일","excerpt":"\\n"}');export{ts as comp,os as data};