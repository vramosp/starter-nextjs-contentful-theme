import {
    IBadgeFields,
    IButtonFields,
    ICheckboxFormControlFields,
    IConfigFields,
    IContactBlockFields,
    IContactSectionFields,
    ICtaSectionFields,
    IEmailFormControlFields,
    IFaqItemFields,
    IFaqSectionFields,
    IFeaturedItemFields,
    IFeaturedItemsSectionFields,
    IFeaturedPeopleSectionFields,
    IFeaturedPostsSectionFields,
    IFeatureHighlightSectionFields,
    IFooterFields,
    IFormBlockFields,
    IHeaderFields,
    IHeroSectionFields,
    IImageBlockFields,
    IJobListFields,
    IJobListItemFields,
    IJobsSectionFields,
    ILinkFields,
    IMediaGallerySectionFields,
    IPagedPostsSectionFields,
    IPageLayoutFields,
    IPersonFields,
    IPostFeedLayoutFields,
    IPostFeedSectionFields,
    IPostLayoutFields,
    IQuoteSectionFields,
    IRecentPostsSectionFields,
    ISelectFormControlFields,
    ISocialFields,
    ITestimonialFields,
    ITestimonialsSectionFields,
    ITextareaFormControlFields,
    ITextFormControlFields,
    ITextSectionFields,
    IThemeStyleButtonFields,
    IThemeStyleFields,
    IThemeStyleHeadingFields,
    IVideoBlockFields
} from './contentful';

export interface Metadata {
    __metadata: {
        modelName: string;
    };
}

export type PageMetadata = Metadata & {
    __metadata: {
        urlPath: string;
    };
};

export type Badge = IBadgeFields & Metadata;

export type ButtonOrLinkArray = (Button | Link)[];

export type Button = IButtonFields & Metadata;

export type Link = ILinkFields & Metadata;

export type Social = ISocialFields & Metadata;

export type ImageBlock = IImageBlockFields & Metadata;

export type VideoBlock = IVideoBlockFields & Metadata;

export type FormBlock = Omit<IFormBlockFields, 'fields'> &
    Metadata & {
        fields?: (TextFormControl | EmailFormControl | TextareaFormControl | CheckboxFormControl | SelectFormControl)[] | undefined;
    };

export type TextFormControl = ITextFormControlFields & Metadata;
export type EmailFormControl = IEmailFormControlFields & Metadata;
export type TextareaFormControl = ITextareaFormControlFields & Metadata;
export type CheckboxFormControl = ICheckboxFormControlFields & Metadata;
export type SelectFormControl = ISelectFormControlFields & Metadata;

export type ContactBlock = IContactBlockFields & Metadata;

export type Header = Omit<IHeaderFields, 'logo' | 'primaryLinks' | 'secondaryLinks'> &
    Metadata & {
        logo?: ImageBlock | undefined;
        primaryLinks?: ButtonOrLinkArray | undefined;
        secondaryLinks?: ButtonOrLinkArray | undefined;
    };

export type Footer = Omit<IFooterFields, 'logo' | 'contacts' | 'primaryLinks' | 'socialLinks' | 'legalLinks'> &
    Metadata & {
        logo?: ImageBlock | undefined;
        contacts?: ContactBlock | undefined;
        primaryLinks?: ButtonOrLinkArray | undefined;
        socialLinks?: Social[] | undefined;
        legalLinks?: ButtonOrLinkArray | undefined;
    };

export type Config = Omit<IConfigFields, 'header' | 'footer'> &
    Metadata & {
        header?: Header | undefined;
        footer?: Footer | undefined;
    };

export type Person = Omit<IPersonFields, 'image'> &
    Metadata & {
        image?: ImageBlock | undefined;
    };

export type PageLayout = Omit<IPageLayoutFields, 'sections'> &
    PageMetadata & {
        sections?: Sections | undefined;
    };

export type PostLayout = Omit<IPostLayoutFields, 'author' | 'featuredImage' | 'bottomSections'> &
    PageMetadata & {
        author?: Person | undefined;
        featuredImage?: ImageBlock | undefined;
        bottomSections?: Sections | undefined;
    };

export type PostFeedLayout = Omit<IPostFeedLayoutFields, 'postFeed' | 'topSections' | 'bottomSections'> &
    PageMetadata & {
        postFeed?: PagedPostsSection | undefined;
        topSections?: Sections | undefined;
        bottomSections?: Sections | undefined;
    };

export type PagedPostsSection = Omit<IPagedPostsSectionFields, 'actions'> &
    Metadata & {
        actions?: ButtonOrLinkArray | undefined;
    };

export type Sections = (
    | ContactSection
    | CtaSection
    | FaqSection
    | FeatureHighlightSection
    | FeaturedItemsSection
    | FeaturedPeopleSection
    | FeaturedPostsSection
    | HeroSection
    | JobsSection
    | MediaGallerySection
    | QuoteSection
    | RecentPostsSection
    | TestimonialsSection
    | TextSection
)[];

export type ContactSection = Omit<IContactSectionFields, 'form' | 'media'> &
    Metadata & {
        form?: FormBlock | undefined;
        media?: ImageBlock | VideoBlock | undefined;
    };

export type CtaSection = Omit<ICtaSectionFields, 'actions' | 'backgroundImage'> &
    Metadata & {
        actions?: ButtonOrLinkArray | undefined;
        backgroundImage?: ImageBlock | undefined;
    };

export type FaqSection = Omit<IFaqSectionFields, 'actions' | 'items'> &
    Metadata & {
        actions?: ButtonOrLinkArray | undefined;
        items?: FaqItem[] | undefined;
    };

export type FaqItem = IFaqItemFields & Metadata;

export type FeaturedItemsSection = Omit<IFeaturedItemsSectionFields, 'items' | 'actions'> &
    Metadata & {
        items?: FeaturedItem[] | undefined;
        actions?: ButtonOrLinkArray | undefined;
    };

export type FeaturedItem = Omit<IFeaturedItemFields, 'featuredImage' | 'actions'> &
    Metadata & {
        featuredImage?: ImageBlock | undefined;
        actions?: ButtonOrLinkArray | undefined;
    };

export type FeaturedPeopleSection = Omit<IFeaturedPeopleSectionFields, 'actions' | 'people'> &
    Metadata & {
        actions?: ButtonOrLinkArray | undefined;
        people?: Person[] | undefined;
    };

export type FeaturedPostsSection = Omit<IFeaturedPostsSectionFields, 'actions' | 'posts'> &
    Metadata & {
        actions?: ButtonOrLinkArray | undefined;
        posts?: PostLayout[] | undefined;
    };

export type FeatureHighlightSection = Omit<IFeatureHighlightSectionFields, 'badge' | 'actions' | 'media'> &
    Metadata & {
        badge?: Badge | undefined;
        actions?: ButtonOrLinkArray | undefined;
        media?: ImageBlock | VideoBlock | undefined;
    };

export type HeroSection = Omit<IHeroSectionFields, 'badge' | 'actions' | 'media'> &
    Metadata & {
        badge?: Badge | undefined;
        actions?: ButtonOrLinkArray | undefined;
        media?: FormBlock | ImageBlock | VideoBlock | undefined;
    };

export type JobsSection = Omit<IJobsSectionFields, 'jobLists'> &
    Metadata & {
        jobLists?: JobList[] | undefined;
    };

export type JobList = Omit<IJobListFields, 'items'> &
    Metadata & {
        items?: JobListItem[] | undefined;
    };

export type JobListItem = Omit<IJobListItemFields, 'actions'> &
    Metadata & {
        actions?: ButtonOrLinkArray | undefined;
    };

export type MediaGallerySection = Omit<IMediaGallerySectionFields, 'images'> &
    Metadata & {
        images?: ImageBlock[] | undefined;
    };

export type PostFeedSection = Omit<IPostFeedSectionFields, 'actions'> &
    Metadata & {
        actions?: ButtonOrLinkArray | undefined;
    };

export type QuoteSection = Omit<IQuoteSectionFields, 'backgroundImage'> &
    Metadata & {
        backgroundImage?: ImageBlock | undefined;
    };

export type RecentPostsSection = Omit<IRecentPostsSectionFields, 'actions'> &
    Metadata & {
        actions?: ButtonOrLinkArray | undefined;
    };

export type TestimonialsSection = Omit<ITestimonialsSectionFields, 'testimonials'> &
    Metadata & {
        testimonials?: Testimonial[] | undefined;
    };

export type Testimonial = Omit<ITestimonialFields, 'image'> &
    Metadata & {
        image?: ImageBlock | undefined;
    };

export type TextSection = ITextSectionFields & Metadata;

export type ThemeStyle = Omit<IThemeStyleFields, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'buttonPrimary' | 'buttonSecondary' | 'link'> &
    Metadata & {
        h1?: ThemeStyleHeading | undefined;
        h2?: ThemeStyleHeading | undefined;
        h3?: ThemeStyleHeading | undefined;
        h4?: ThemeStyleHeading | undefined;
        h5?: ThemeStyleHeading | undefined;
        h6?: ThemeStyleHeading | undefined;
        buttonPrimary?: ThemeStyleButton | undefined;
        buttonSecondary?: ThemeStyleButton | undefined;
        link?: ThemeStyleButton | undefined;
    };

export type ThemeStyleHeading = IThemeStyleHeadingFields & Metadata;
export type ThemeStyleButton = IThemeStyleButtonFields & Metadata;
