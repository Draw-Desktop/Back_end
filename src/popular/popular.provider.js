const popularDto = require('./popular.dto.js');

exports.getPWallpaper = async () => {
    return popularDto.getPopularWallpaperResponseDTO();
};

exports.getPCategory = async () => {
    return popularDto.getPopularCategoryResponseDTO();
};