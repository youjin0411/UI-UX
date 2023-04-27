def solution(s):
    answer = ''
    # try/hello/world
    temp = s.split(" ")
    for i in temp:
        # try => [t,r,y]
        arr = i.split("")
        for idx, val in enumerate(arr):
            if idx % 2 == 0:
                answer += val.upper()
            else: answer += val
    return answer
print = solution("try hello world")
