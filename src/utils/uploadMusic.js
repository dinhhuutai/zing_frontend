const uploadMusic = (music) => {
    
    try {
        const uploadData = new FormData();
        uploadData.append("music", music?.target?.files[0]);
    
        return uploadData;
    } catch (error) {
        
    }
}

export default uploadMusic;