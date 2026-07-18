import rabbitAboutUrl from '../../assets/story/rabbit-about.webp';
import rabbitFolderUrl from '../../assets/story/rabbit-folder.webp';
import rabbitGreetingUrl from '../../assets/story/rabbit-greeting.webp';
import rabbitNamingUrl from '../../assets/story/rabbit-naming.webp';
import rabbitQuestioningUrl from '../../assets/story/rabbit-questioning.webp';
import rabbitSettingsUrl from '../../assets/story/rabbit-settings.webp';
import rabbitStartledUrl from '../../assets/story/rabbit-startled.webp';
import rabbitStoryGreetingUrl from '../../assets/story/rabbit-story-greeting.webp';
import rabbitThinkingUrl from '../../assets/story/rabbit-thinking.webp';

export type RabbitPose = 'greeting' | 'questioning' | 'storyGreeting' | 'thinking' | 'startled' | 'naming' | 'folder';

export const rabbitPoseUrls: Record<RabbitPose, string> = {
  greeting: rabbitGreetingUrl,
  questioning: rabbitQuestioningUrl,
  storyGreeting: rabbitStoryGreetingUrl,
  thinking: rabbitThinkingUrl,
  startled: rabbitStartledUrl,
  naming: rabbitNamingUrl,
  folder: rabbitFolderUrl,
};

export const homeRabbitUrl = rabbitGreetingUrl;
export const aboutRabbitUrl = rabbitAboutUrl;
export const settingsRabbitUrl = rabbitSettingsUrl;
export const filesRabbitUrl = rabbitFolderUrl;

const rabbitAssetUrls = [...new Set([
  ...Object.values(rabbitPoseUrls),
  aboutRabbitUrl,
  settingsRabbitUrl,
])];
const warmedRabbitUrls = new Set<string>();

function warmRabbitAsset(src: string): void {
  if (typeof Image === 'undefined' || warmedRabbitUrls.has(src)) return;

  const image = new Image();
  image.decoding = 'async';
  image.src = src;
  warmedRabbitUrls.add(src);
}

export function warmRabbitAssets(): void {
  rabbitAssetUrls.forEach(warmRabbitAsset);
}

export function warmStoryIntroFirstRabbitAsset(): void {
  warmRabbitAsset(rabbitPoseUrls.questioning);
}
