document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const qualitySlider = document.getElementById('quality');
    const qualityValue = document.getElementById('qualityValue');
    const originalPreview = document.getElementById('originalPreview');
    const compressedPreview = document.getElementById('compressedPreview');
    const originalInfo = document.getElementById('originalInfo');
    const compressedInfo = document.getElementById('compressedInfo');
    const downloadBtn = document.getElementById('downloadBtn');

    let originalImage = null;
    let compressedImage = null;

    // 上传区域点击事件
    uploadArea.addEventListener('click', () => {
        imageInput.click();
    });

    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#007AFF';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '#ddd';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ddd';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    });

    // 文件选择处理
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
    });

    // 质量滑块变化事件
    qualitySlider.addEventListener('input', (e) => {
        qualityValue.textContent = `${e.target.value}%`;
        if (originalImage) {
            compressImage(originalImage);
        }
    });

    // 处理图片上传
    async function handleImageUpload(file) {
        originalImage = file;
        displayImagePreview(file, originalPreview);
        originalInfo.textContent = `文件大小: ${formatFileSize(file.size)}`;
        await compressImage(file);
    }

    // 压缩图片
    async function compressImage(file) {
        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                quality: qualitySlider.value / 100
            };

            const compressedFile = await imageCompression(file, options);
            compressedImage = compressedFile;
            
            displayImagePreview(compressedFile, compressedPreview);
            compressedInfo.textContent = `文件大小: ${formatFileSize(compressedFile.size)}`;
            downloadBtn.disabled = false;
        } catch (error) {
            console.error('压缩失败:', error);
            compressedInfo.textContent = '压缩失败，请重试';
        }
    }

    // 显示图片预览
    function displayImagePreview(file, previewElement) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewElement.innerHTML = '';
            previewElement.appendChild(img);
        };
        reader.readAsDataURL(file);
    }

    // 格式化文件大小
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // 下载按钮点击事件
    downloadBtn.addEventListener('click', () => {
        if (compressedImage) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(compressedImage);
            link.download = `compressed_${originalImage.name}`;
            link.click();
        }
    });
}); 