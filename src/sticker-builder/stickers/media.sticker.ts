import { InstaSticker } from './insta-sticker';

export interface MediaStickerOptions {
  mediaId: string;
  mediaOwnerId: string;
}

export class MediaSticker extends InstaSticker implements MediaStickerOptions {
  mediaId: string;
  mediaOwnerId: string;
  width = 0.5;
  height = 0.5;

  get id(): string {
    return `media_post_${this.mediaId}`;
  }

  get key(): string {
    return 'attached_media';
  }
}
