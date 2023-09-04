import { TranslateService } from "@ngx-translate/core";

export const titles = ["Pres", "Compétences", "Projets", "Expériences", "Formation"];

export function subscribeTitles(translate: TranslateService): void{

    translate.get('portfolio.titlePresentation').subscribe((res: string) => {
        titles[0] = res;
    });
}
export function getTitles(): string[]{
    return titles
}