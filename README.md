<<<<<<< HEAD
# 图片压缩网站

这是一个简洁优雅的图片压缩工具网站，采用苹果风格设计，帮助用户轻松压缩图片文件。

## 功能特点

- 支持PNG、JPG等常见图片格式
- 自定义压缩比例
- 实时预览压缩效果
- 显示压缩前后文件大小
- 一键下载压缩后的图片
- 响应式设计，支持各种设备

## 技术栈

- HTML5
- CSS3
- JavaScript
- 使用browser-image-compression库进行图片压缩

## 项目结构

图片压缩/
├── index.html          # 主页面
├── css/               
│   └── style.css      # 样式文件
├── js/
│   └── main.js        # 主要逻辑
└── README.md          # 项目说明

## 如何运行

1. 克隆或下载项目到本地

2. 确保您的计算机已安装现代浏览器（如 Chrome、Firefox、Safari 等）

3. 直接运行：
   - 双击打开 index.html 文件
   - 或将整个文件夹拖入浏览器中
   
4. 使用本地服务器运行（推荐）：
   - 使用 Visual Studio Code，安装 "Live Server" 扩展
   - 右键点击 index.html，选择 "Open with Live Server"
   - 或使用 Python 简单服务器：
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     ```
   - 然后在浏览器中访问 http://localhost:8000

## 使用说明

1. 上传图片：
   - 点击上传区域选择图片
   - 或直接将图片拖拽到上传区域

2. 调整压缩质量：
   - 使用滑块调整压缩质量（0-100%）
   - 数值越高，图片质量越好，文件越大
   - 数值越低，压缩率越高，文件越小

3. 预览和下载：
   - 实时查看原图和压缩后的效果对比
   - 查看压缩前后的文件大小
   - 点击"下载"按钮保存压缩后的图片

## 注意事项

- 建议使用最新版本的现代浏览器
- 较大图片的压缩可能需要一些时间
- 本工具在本地运行，您的图片不会上传到任何服务器 
=======
<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# Introduction to GitHub

_Get started using GitHub in less than an hour._

</header>

<!--
  <<< Author notes: Step 1 >>>
  Choose 3-5 steps for your course.
  The first step is always the hardest, so pick something easy!
  Link to docs.github.com for further explanations.
  Encourage users to open new tabs for steps!
-->

## Step 1: Create a branch

_Welcome to "Introduction to GitHub"! :wave:_

**What is GitHub?**: GitHub is a collaboration platform that uses _[Git](https://docs.github.com/get-started/quickstart/github-glossary#git)_ for versioning. GitHub is a popular place to share and contribute to [open-source](https://docs.github.com/get-started/quickstart/github-glossary#open-source) software.
<br>:tv: [Video: What is GitHub?](https://www.youtube.com/watch?v=pBy1zgt0XPc)

**What is a repository?**: A _[repository](https://docs.github.com/get-started/quickstart/github-glossary#repository)_ is a project containing files and folders. A repository tracks versions of files and folders. For more information, see "[About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)" from GitHub Docs.

**What is a branch?**: A _[branch](https://docs.github.com/en/get-started/quickstart/github-glossary#branch)_ is a parallel version of your repository. By default, your repository has one branch named `main` and it is considered to be the definitive branch. Creating additional branches allows you to copy the `main` branch of your repository and safely make any changes without disrupting the main project. Many people use branches to work on specific features without affecting any other parts of the project.

Branches allow you to separate your work from the `main` branch. In other words, everyone's work is safe while you contribute. For more information, see "[About branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)".

**What is a profile README?**: A _[profile README](https://docs.github.com/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)_ is essentially an "About me" section on your GitHub profile where you can share information about yourself with the community on GitHub.com. GitHub shows your profile README at the top of your profile page. For more information, see "[Managing your profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)".

![profile-readme-example](/images/profile-readme-example.png)

### :keyboard: Activity: Your first branch

1. Open a new browser tab and navigate to your newly made repository. Then, work on the steps in your second tab while you read the instructions in this tab.
2. Navigate to the **< > Code** tab in the header menu of your repository.

   ![code-tab](/images/code-tab.png)

3. Click on the **main** branch drop-down.

   ![main-branch-dropdown](/images/main-branch-dropdown.png)

4. In the field, name your branch `my-first-branch`. In this case, the name must be `my-first-branch` to trigger the course workflow.
5. Click **Create branch: my-first-branch** to create your branch.

   ![create-branch-button](/images/create-branch-button.png)

   The branch will automatically switch to the one you have just created.
   The **main** branch drop-down bar will reflect your new branch and display the new branch name.

6. Wait about 20 seconds then refresh this page (the one you're following instructions from). [GitHub Actions](https://docs.github.com/en/actions) will automatically update to the next step.

<footer>

<!--
  <<< Author notes: Footer >>>
  Add a link to get support, GitHub status page, code of conduct, license link.
-->

---

Get help: [Post in our discussion board](https://github.com/orgs/skills/discussions/categories/introduction-to-github) &bull; [Review the GitHub status page](https://www.githubstatus.com/)

&copy; 2024 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

</footer>
>>>>>>> c34d75c3813f06ed928744f6e6ee3471bb43ad77
