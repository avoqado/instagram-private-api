import { InstaSticker } from './insta-sticker';

export interface MediaStickerOptions {
  mediaId: string;
  mediaOwner: string;
}

export class MediaSticker extends InstaSticker implements MediaStickerOptions {
  mediaId: string;
  mediaOwner: string;
  width = 0.44510135;
  height = 0.7994792;

  get id(): string {
    return `media_post_${this.mediaId}`;
  }

  get key(): string {
    return 'attached_media';
  }
}
