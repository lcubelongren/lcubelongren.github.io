
import numpy as np
import matplotlib.pyplot as plt


tasha = []
luke = []

texts = open(r'WhatsApp Chat with tasha.txt', 'r', errors='ignore', encoding='ASCII')
for line in texts:
    if len(line.split()):
        date = line.split()[0].split('/')
        if len(date) == 3:
            name = line.split()[3].split(':')[0]
            if name == 'tasha':
                for word in line.split()[4:]:
                    tasha.append(word)
            if name == 'Luke':
                for word in line.split()[5:]:
                    luke.append(word)

tasha_top = []
luke_top = []

for partner,top in zip([tasha, luke], [tasha_top, luke_top]):
    exclude = ['omitted>', '<Media', 'null', '<edited>']
    partner = [x for x in partner if not x in exclude]
    endings = [',']
    partner = [x for x in partner if not x[-1] in endings]
    words, counts = np.unique(partner, return_counts=True)
    top_words = words[np.argsort(counts)[::-1]]
    top_counts = counts[np.argsort(counts)[::-1]]
    for i in range(25):
        top.append([top_counts[i], top_words[i]])
    for i in range(len(words)):
        if top_words[i] in ['love', 'Love']:
            print(i+1, top_counts[i], top_words[i])
    print(len(words))
    
combined_top = np.append(np.array(tasha_top)[:,1], np.array(luke_top)[:,1])
combined_top = np.unique(combined_top)
tasha_top_counts = np.zeros(len(combined_top))
luke_top_counts = np.zeros(len(combined_top))
for partner,top_counts in zip([tasha, luke], [tasha_top_counts, luke_top_counts]):
    partner = np.array(partner)
    for i,word in enumerate(combined_top):
        words, counts = np.unique(partner, return_counts=True)
        try:
            top_counts[i] = counts[words == word][0]
        except:
            top_counts[i] = np.nan

tasha_color = 'pink'
luke_color = 'blue'

plt.figure(figsize=(9,5), dpi=150)
plt.scatter(np.arange(len(combined_top)), tasha_top_counts, c=tasha_color, label='tasha')
plt.scatter(np.arange(len(combined_top)), luke_top_counts, c=luke_color, label='luke')
for i in range(len(combined_top)):
    plt.plot([i,i], [tasha_top_counts[i],luke_top_counts[i]], c='k')
plt.title('Words used while texting on WhatsApp - 10/23/23 to 3/29/24')
plt.ylabel('word count')
plt.xticks(np.arange(len(combined_top)), combined_top, rotation=45)
plt.legend()
plt.tight_layout()
plt.savefig('texts-top25.png')

plt.figure(figsize=(2,2), dpi=250)
ticks = [0.00, 0.15, 0.40, 0.55]
plt.bar(ticks, [16, 7, 2, 3], width=0.15, color=[tasha_color, luke_color, tasha_color, luke_color])
plt.xticks([0.075, 0.475], ['love', 'Love'])
plt.yticks([0, 4, 8, 12, 16])
plt.savefig('texts-love.png')

plt.figure(figsize=(3,3), dpi=250)
plt.pie([2778, 1908], colors=[tasha_color, luke_color], labels=['2778 words', '1908 words'])
plt.savefig('texts-pie.png')
