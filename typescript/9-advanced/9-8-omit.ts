{
    type Video = {
        id : string;
        title : string;
        url : string;
        data : string;
    };
    // 원하는 것만 쏙쏙!
    type VideoMetaData = Pick<Video, 'id' | 'title'>;

    // Pick 과 반대!
    type VideoMetaData2 = Omit<Video,'url' | 'data'>;

    function getVideo (id : string): Video {
        return {
            id,
            title : 'video',
            url : 'https://',
            data : 'byte-data...'
        };
    };

    function getVideoMetadata(id : string): VideoMetaData2 {
        return {
            id,
            title : 'string',
            // url : 'string', ( X )
        }
    }
}