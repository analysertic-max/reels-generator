// ===== استيراد كل المقالات =====
import aiContentCreationTips from './ai-content-creation-tips';
import aitoolsforarabiccontent from './ai-tools-for-arabic-content';
import algerianregistrationDZlger from './algerian-registrationDZlger';
import amazonindustrydatabase from './amazon-industry-database';
import bestapps2026 from './best-apps-2026';
import bestImageForPost from './best-image-for-post';
import bestsmartphones2026 from './best-smartphones-2026';
import bestTimesInstagram from './best-times-instagram';
import bestTimesToPostOnFacebook from './best-times-to-post-on-facebook';
import besttimetopost2026 from './best-time-to-post-2026';
import besttraveldestinations2026 from './best-travel-destinations-2026';
import cherifchibanAlgerianDz from './cherif-chiban-AlgerianDz';
import elonMuskNucleiWeapeon from './elon-Musk-Nuclei-Weapeon';
import ElonMuskthreadfromAI from './Elon-Musk-thread-fromAI';
import facebookGrowthStrategies from './facebook-growth-strategies';
import facebookPostIdeas from './facebook-post-ideas';
import freephotosforsocialmedia from './free-photos-for-social-media';
import hamzaBenDeledjbuildchield from './hamza-BenDeledj-build-chield';
import healthyfoodtips from './healthy-food-tips';
import howToIncreaseFacebookEngagement from './how-to-increase-facebook-engagement';
import howtosavemoney from './how-to-save-money';
import howtospeedupcomputer from './how-to-speed-up-computer';
import huaweimate90promaxsimcard from './huawei-mate-90-pro-max-sim-card';
import increasefollowersfacebook from './increase-followers-facebook';
import iphoneios27update from './iphone-ios27-update';
import learnlanguagefast from './learn-language-fast';
import morninghabitssuccess from './morning-habits-success';
import nvidiabuildaguardianai from './nvidia-build-a-guardian-ai';
import samsungGalaxyS26Ultra from './samsung-GalaxyS26Ultra';
import samsunginalgeria from './samsung-in-algeria';
import socialmediaalgorithms2026 from './social-media-algorithms-2026';
import socialMediaMistakes from './social-media-mistakes';
import solarpanel2026technology from './solar-panel-2026-technology';
import startsmallbusiness from './start-small-business';
import whatsappbusinesstips from './whatsapp-business-tips';
import humainmath from './humain-math';

// ===== جمع المقالات في كائن واحد =====
export const blogArticles = {
  'ai-content-creation-tips': aiContentCreationTips,
  'ai-tools-for-arabic-content': aitoolsforarabiccontent,
  'algerian-registrationDZlger': algerianregistrationDZlger,
  'amazon-industry-database': amazonindustrydatabase,
  'best-apps-2026': bestapps2026,
  'best-image-for-post': bestImageForPost,
  'best-smartphones-2026': bestsmartphones2026,
  'best-times-instagram': bestTimesInstagram,
  'best-times-to-post-on-facebook': bestTimesToPostOnFacebook,
  'best-time-to-post-2026': besttimetopost2026,
  'best-travel-destinations-2026': besttraveldestinations2026,
  'cherif-chiban-AlgerianDz': cherifchibanAlgerianDz,
  'elon-Musk-Nuclei-Weapeon': elonMuskNucleiWeapeon,
  'Elon-Musk-thread-fromAI': ElonMuskthreadfromAI,
  'facebook-growth-strategies': facebookGrowthStrategies,
  'facebook-post-ideas': facebookPostIdeas,
  'free-photos-for-social-media': freephotosforsocialmedia,
  'hamza-BenDeledj-build-chield': hamzaBenDeledjbuildchield,
  'healthy-food-tips': healthyfoodtips,
  'how-to-increase-facebook-engagement': howToIncreaseFacebookEngagement,
  'how-to-save-money': howtosavemoney,
  'how-to-speed-up-computer': howtospeedupcomputer,
  'huawei-mate-90-pro-max-sim-card': huaweimate90promaxsimcard,
  'increase-followers-facebook': increasefollowersfacebook,
  'iphone-ios27-update': iphoneios27update,
  'learn-language-fast': learnlanguagefast,
  'morning-habits-success': morninghabitssuccess,
  'nvidia-build-a-guardian-ai': nvidiabuildaguardianai,
  'samsung-GalaxyS26Ultra': samsungGalaxyS26Ultra,
  'samsung-in-algeria': samsunginalgeria,
  'social-media-algorithms-2026': socialmediaalgorithms2026,
  'social-media-mistakes': socialMediaMistakes,
  'solar-panel-2026-technology': solarpanel2026technology,
  'start-small-business': startsmallbusiness,
  'whatsapp-business-tips': whatsappbusinesstips,
   'humain-math': humainmath,
};

// ===== قائمة مختصرة للفهرسة =====
export const blogArticlesList = Object.values(blogArticles).map((article) => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  date: article.date,
  image: article.image,
  category: article.category,
  readTime: article.readTime,
}));