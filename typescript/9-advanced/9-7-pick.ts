{
    type Video = {
        id : string;
        title : string;
        url : string;
        data : string;
    };
    // 원하는 것만 쏙쏙
    type VideoMetaData = Pick<Video, 'id' | 'title'>;

    function getVideo2(id : string) : Video {
        return {
            id,
            title : 'video',
            url : 'https://',
            data : 'byte-data...'
        };
    };

    function getVideoMetadata2(id : string): VideoMetaData {
        return {
            id,
            title : 'string',
            // url : 'string', ( X )
        }
    }
}